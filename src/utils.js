// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js
const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */

const path = require('path')
/** @type {any} */
const fs = require('fs')

const repolinter = require('repolinter') /*project which this is build upon */

const chalk = require('chalk')

const formattedDate = new Date().toISOString().substring(0, 13) /*transforms Date() into shorter string*/

/* Separate negative and positive results and prints nicely in terminal */
const printResults = function (data, results, log = console.log) {
  const posResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  const negResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  log(chalk`{bgBlue Repository: ${data.name}}`)
  if (results.every(r => r.lintResult && r.lintResult.passed)) {
    log(chalk`{greenBright Passed all checks 🥳 \n}`)
  } else {
    negResults.forEach(r => {
      log(chalk`{hex('#FF8800') 🚨 ${r}}`)
    })
    posResults.forEach(r => {
      log(chalk`{greenBright ✅ ${r}}`)
    })
    log('\n')
  }
}

/* Filter positive results and make it available to filter data */
const positiveResults = function (results) {
  return results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)
}

/* Filter negative results and make it available to filter data */
const negativeResults = function (results) {
  return results
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  /* In case someone needs an output with ratio */
  /*
  return {
    results: negResults,
    ratio: `${negResults.length} out of ${results.length}`,
  }
  */
}

/* Check if Changelog rule exists, if not, verify if releases exist */
const validateChangeLog = async function (results, input, repository) {
  /* search if the rule exists */
  const changelogResult = results.find(item => item.ruleInfo.name === 'Changelog')
  /* if Changelog rule do not exists, or the result has already passed, do not continue */
  if (!changelogResult || changelogResult.lintResult.passed) {
    return
  }
  /* verify if there are releases */
  const releases = await octokit.repos.listReleases({
    owner: input,
    repo: repository,
    per_page: 100,
  })
  /* If releases are found, update Changelog rule result to true */
  const hasReleases = !(releases.data === undefined || releases.data.length === 0)
  if (hasReleases) {
    /* Observe which data type returns: Objects! */
    changelogResult.lintResult.passed = true
  }
}

/* Creates a JSON file inside a folder with organization name */
const createJsonFile = async function (repository, input, results) {
  const print = await repolinter.jsonFormatter.formatOutput(results) /*JS Object return into json*/
  const directory = path.resolve(__dirname, '..', 'reports', input)

  if (!fs.existsSync(directory)) {
    console.log(`A directory is created at ${directory}`)
    await fs.promises.mkdir(directory, { recursive: true })
  }

  await fs.promises.writeFile(
    path.resolve(directory, `${formattedDate}-${repository}.json`),
    JSON.stringify(JSON.parse(print), null, 2)
  )
}

/* Writes and overwrites a JSON file and save it into frontend/public folder */
const createJsonDashboardFile = async function (output) {
  const directory = path.resolve(__dirname, '..', 'frontend', 'public')

  await fs.promises.writeFile(path.resolve(directory, 'frontend.json'), JSON.stringify(output))
}

module.exports = {
  printResults,
  positiveResults,
  negativeResults,
  validateChangeLog,
  createJsonFile,
  createJsonDashboardFile,
}
