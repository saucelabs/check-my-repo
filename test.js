const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()
const repolinter = require('repolinter')
const git = require('simple-git/promise')()

// const repo = 'https://github.com/saucelabs/new-project.git'
// git.clone(repo, './tmp')

async function main() {
  const { data } = await octokit.repos.listForOrg({
    org: 'saucelabs',
    type: 'public',
  })

  const urls = data.map(obj => obj.clone_url)

  // execute repolinter default ruleset
  for (const url of urls.slice(0, 1)) {
    // let urlToLint = await git.clone(url, './tmp')
    await git.clone(url, './tmp')

    const repolinterConnect = await repolinter.lint('./tmp')
    console.log(repolinterConnect.results)

    // filter messages for what didn't passed
    const results = repolinterConnect.results
      .filter(r => r.lintResult && !r.lintResult.passed)
      .map(r => r.lintResult.message)
    // console.log(`In the repo ${url} there are a few missing things: ${results}\n`)
  }
}

main()
