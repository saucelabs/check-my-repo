// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js
const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */

const path = require('path')
/** @type {any} */
const fs = require('fs')

const repolinter = require('repolinter') /*project which this is build upon */

const chalk = require('chalk')

const formatedDate = new Date().toISOString().substring(0, 13) /*transforms Date() into shorter string*/

/*
const deleteTempDir = function(){
  exports.tempGitClone = async function () {
    if (argv.git) {
      tmpDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'repolinter-'))
      const result = await git.clone(argv.directory, tmpDir)
      if (result) {
        console.error(result)
        process.exitCode = 1
        rimraf(tmpDir, () => {})
        return
      }
    }
  }
}
*/

/* Separate negative and positive results and prints nicely in terminal */
const printResults = function (data, results, log = console.log) {
  const posResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  const negResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  if (results.every(r => r.lintResult && r.lintResult.passed)) {
    log(chalk`{bgBlue Repository: ${data.name}\n}
      {greenBright Passed all checks 🥳 \n}`)
  } else {
    log(chalk`{bgBlue Repository: ${data.name}}`)
    for (let i = 0; i < negResults.length; i++) {
      log(chalk`
        {hex('#FF8800') 🚨 ${negResults[i]}}`)
    }
    for (let i = 0; i < posResults.length; i++) {
      log(chalk`
        {greenBright ✅ ${posResults[i]}}`)
    }
    log('\n')
  }
}

/* Creates a JSON file inside a folder with organization name */
const createJsonFile = async function (repository, organization, results) {
  const print = await repolinter.jsonFormatter.formatOutput(results) /*JS Object return into json*/
  const directory = path.resolve(__dirname, '..', 'reports', organization)

  if (!fs.existsSync(directory)) {
    console.log(`A directory is created at ${directory}`)
    await fs.promises.mkdir(directory, { recursive: true })
  }

  await fs.promises.writeFile(
    path.resolve(directory, `${formatedDate}-${repository}.json`),
    JSON.stringify(JSON.parse(print), null, 2)
  )
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

module.exports = { printResults, createJsonFile, formatedDate, validateChangeLog }
