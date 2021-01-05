// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js
const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */

const path = require('path')
/** @type {any} */
const fs = require('fs')

const repolinter = require('repolinter') /*project which this is build upon */

const formatedDate = new Date().toISOString().substring(0, 13) /*transforms Date() into shorter string*/

const positiveResults = function (results) {
  const posResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  return {
    results: posResults,
    ratio: `${posResults.length} out of ${results.length}`,
  }
}

const negativeResults = function (results) {
  const negResults = results
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  return {
    results: negResults,
    ratio: `${negResults.length} out of ${results.length}`,
  }
}

/* Check if Changelog rule exists, if not, verify if releases exist */
const validateChangeLog = async function (results, organization, repository) {
  /* search if the rule exists */
  const changelogResult = results.find(item => item.ruleInfo.name === 'Changelog')
  /* if Changelog rule do not exists, or the result has already passed, do not continue */
  if (!changelogResult || changelogResult.lintResult.passed) {
    return
  }
  /* verify if there are releases */
  const releases = await octokit.repos.listReleases({
    owner: organization,
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
const createJsonDashboardFile = async function (output) {
  const directory = path.resolve(__dirname, '..', 'frontend', 'public')

  await fs.promises.writeFile(path.resolve(directory, 'dashboard.json'), JSON.stringify(output))
}

module.exports = {
  formatedDate,
  validateChangeLog,
  positiveResults,
  negativeResults,
  createJsonDashboardFile,
}
