const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */
const repolinter = require('repolinter') /*project which this is build upon */
const git = require('simple-git/promise')() /*lib for GitHub API */
const chalk = require('chalk')

const path = require('path')
const fs = require('fs')
const os = require('os')

const { validateChangeLog, positiveResults, negativeResults, makeResultObject } = require('./proto-utils')

const organization = process.argv[2] || 'saucelabs'
const access = 'public'

let passingRepositories = 0

async function main() {
  const { data } = await octokit.repos.listForOrg({
    org: organization,
    type: access,
    per_page: 8,
  })

  for (const d of data) {
    const tmpDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), `repolinter-${d.name}-`))
    await git.clone(d.clone_url, tmpDir)
    const repolinterConnect = await repolinter.lint(tmpDir) /*execute repolinter default ruleset*/

    /* Validates if Changelog rule passed, of not, search for releases */
    await validateChangeLog(repolinterConnect.results, organization, d.name)

    /* Creates an array to check its length and sum all passing results without a loop */
    const hasFailures =
      repolinterConnect.results /* filter messages for what didn't passed */
        .filter(r => !r.lintResult.passed).length > 0
    if (!hasFailures) {
      passingRepositories++
    }

    let makeObject = await makeResultObject(
      d.name,
      negativeResults(repolinterConnect.results),
      positiveResults(repolinterConnect.results)
    )
    console.log(makeObject)
  }

  /*
  console.log(chalk`\n😨 Total repositories with fails =  {redBright.bold ${data.length - passingRepositories}}\n`)
  console.log(chalk`\n😌 Total healthy repositories =  {greenBright.bold ${passingRepositories}}\n`)
  console.log(chalk`\nNumber of repositories analised: {cyanBright.bold ${data.length}}\n`)
  */
  let totalFails = data.length - passingRepositories
  console.log(chalk`\n😨 Total repositories with fails =  {redBright.bold ${totalFails}}\n`)
  let allPassed = passingRepositories
  console.log(chalk`\n😌 Total healthy repositories =  {greenBright.bold ${allPassed}}\n`)
  let totalRepositories = data.length
  console.log(chalk`\nNumber of repositories analised: {cyanBright.bold ${totalRepositories}}\n`)

  return totalFails, allPassed, totalRepositories
}

/* allows to be executed when not used as an imported file */
if (require.main === module) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
