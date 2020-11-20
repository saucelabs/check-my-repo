// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js

const path = require('path')
// const rimraf = require('rimraf')
// const git = require('simple-git/promise')() /*lib for GitHub API */
/** @type {any} */
const fs = require('fs')
const os = require('os')

const repolinter = require('repolinter') /*project which this is build upon */

const chalk = require('chalk')
const log = console.log

let date = new Date().toISOString().substring(0, 16) /*transforms Date() into shorter string*/

let createTempDirectory = project => {
  return fs.promises.mkdtemp(path.join(os.tmpdir(), `repolinter-${project}-`))
}

/*
// temporarily clone a git repo to lint
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
*/

const printResults = function (data, results) {
  const posResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  const negResults = results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  if (results.every(r => r.lintResult && r.lintResult.passed)) {
    log(chalk`
        {blue Repository: ${data.name}}
        {greenBright Passed all checks 🥳}`)
  } else {
    log(chalk`{bgBlue Repository: ${data.name}}`)
    for (var i = 0; i < negResults.length; i++) {
      log(chalk`
        {hex('#FF8800') 🚨 ${negResults[i]}}`)
    }
    for (var i = 0; i < posResults.length; i++) {
      log(chalk`
        {greenBright ✅ ${posResults[i]}}`)
    }
    console.log('\n')
  }
}

const createJsonFile = async function (repository, organization, repolinterConnect) {
  const print = await repolinter.jsonFormatter.formatOutput(repolinterConnect) /*JS Object return into json*/
  const directory = path.resolve(__dirname, '..', 'reports', organization)

  if (!fs.existsSync(directory)) {
    console.log(`A directory is created at ${directory}`)
    await fs.promises.mkdir(directory, { recursive: true })
  }

  await fs.promises.writeFile(
    path.resolve(directory, `${date}-${repository}.json`),
    JSON.stringify(JSON.parse(print), null, 2)
  )
}

module.exports = { createTempDirectory, printResults, createJsonFile }
