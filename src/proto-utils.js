// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js
const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */

const path = require('path')
// const rimraf = require('rimraf')
// const git = require('simple-git/promise')() /*lib for GitHub API */
/** @type {any} */
const fs = require('fs')

const repolinter = require('repolinter') /*project which this is build upon */

const formatedDate = new Date().toISOString().substring(0, 13) /*transforms Date() into shorter string*/

const positiveResults = async function (results) {
  const posResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  if (results.every(r => r.lintResult && r.lintResult.passed)) {
    return 'All passed'
  }
  return posResults
}

const negativeResults = async function (results) {
  const negResults = results
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  if (results.every(r => r.lintResult && !r.lintResult.passed)) {
    return 'All failed'
  }
  return negResults
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

function makeResultObject(name, failed, passed) {
  const obj = {
    name: name,
    failed: failed,
    passed: passed,
  }
  return obj
}

module.exports = { formatedDate, validateChangeLog, positiveResults, negativeResults, makeResultObject }
