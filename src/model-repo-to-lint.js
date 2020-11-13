// Copyright 2020 Sauce Labs. All rights reserved
// Licensed under the MIT License

/* This file returns output in terminal */

const rainbowPenguin = require('rainbow-penguin')() /*lib for self.care while developing - delete when finish */

const chalk = require('chalk')
const log = console.log

const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit() /*lib for GitHub API */
const repolinter = require('repolinter') /*project which this is build upon */
const git = require('simple-git/promise')() /*lib for GitHub API */

const { createTempDirectory } = require('./utils')

async function main() {
  const url = 'https://github.com/saucelabs/new-project.git'
  // const url = 'https://github.com/discombobulateme/test-automated-check.git'
  const tmpDir = await createTempDirectory('test')
  // console.log(tmpDir)

  await git.clone(url, tmpDir)
  const repolinterConnect = await repolinter.lint(tmpDir) /*execute repolinter default ruleset*/

  const posResults = repolinterConnect.results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  const negResults = repolinterConnect.results /* filter messages for what didn't passed */
    .filter(r => r.lintResult && !r.lintResult.passed)
    .map(r => repolinter.runRuleset && r.ruleInfo.name)

  if (repolinterConnect.results.every(r => r.lintResult && r.lintResult.passed)) {
    log(chalk`
        {blue Repository: new-projec repo model}
        {greenBright Passed all checks 🥳}`)
  } else {
    log(chalk`{blue Repository: new-project model repo}`)
    for (var i = 0; i < negResults.length; i++) {
      log(chalk`
        {red 🚨 ${negResults[i]}}`)
    }
    for (var i = 0; i < posResults.length; i++) {
      log(chalk`
        {greenBright ✅ ${posResults[i]}}`)
    }
  }
}

// allows to be executed when not used as an imported file
if (require.main === module) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
