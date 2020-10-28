const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit() /*lib for GitHub API */
const repolinter = require('repolinter') /*project which this is build upon */
const git = require('simple-git/promise')() /*lib for GitHub API */

async function main() {
  // list public repository urls
  const { data } = await octokit.repos.listForOrg({
    org: 'saucelabs',
    type: 'public',
  })

  // loop over the list of repository urls
  const urls = data.map(obj => obj.clone_url)

  for (const url of urls.slice(0, 1)) {
    // convert url in local repo
    await git.clone(url, './tmp')
    // execute repolinter default ruleset
    const repolinterConnect = await repolinter.lint('./tmp')
    console.log(repolinterConnect.results)

    // filter messages for what didn't passed
    const results = repolinterConnect.results
      .filter(r => r.lintResult && !r.lintResult.passed)
      .map(r => r.lintResult.message)
    console.log(`In the repo ${url} there are a few missing things: ${results}\n`)
    //     const results = lintResult.results.filter(r => r.ruleInfo.level === 'error').map(r => r.ruleInfo.name)
    //     console.log(`In the repo ${url} there are a few missing things: ${results}\n`)
  }
}

main()
