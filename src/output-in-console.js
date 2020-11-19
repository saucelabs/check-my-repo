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

let organization = 'saucelabs'
let access = 'public'

async function main() {
  const { data } = await octokit.repos.listForOrg({
    org: organization,
    type: access,
    per_page: 100,
  })

  for (const d of data) {
    const tmpDir = await createTempDirectory(d.name)
    await git.clone(d.clone_url, tmpDir)
    const repolinterConnect = await repolinter.lint(tmpDir) /*execute repolinter default ruleset*/

    const posResults = repolinterConnect.results /* filter messages for what didn't passed */
      .filter(r => r.lintResult && r.lintResult.passed)
      .map(r => repolinter.runRuleset && r.ruleInfo.name)

    const negResults = repolinterConnect.results /* filter messages for what didn't passed */
      .filter(r => r.lintResult && !r.lintResult.passed)
      .map(r => repolinter.runRuleset && r.ruleInfo.name)

    const sumOfArrays = (...posResults) => {
      var sum = []
      merged.forEach(x => {
        sum.push()
      })
      //once all items have been added to count, return count
      console.log(sum)
    }

    process.exit()
    console.log(`
        Passed: ${posResults.length}
        Failed: ${negResults.length}
        Total repositories checked: ${data.length}
      `)

    if (repolinterConnect.results.every(r => r.lintResult && r.lintResult.passed)) {
      log(chalk`
        {blue Repository: ${d.name}}
        {greenBright Passed all checks 🥳}`)
    } else {
      log(chalk`{bgBlue Repository: ${d.name}}`)
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
}

// allows to be executed when not used as an imported file
if (require.main === module) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
