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

let date = new Date().toISOString().substring(0, 16) /*transforms Date() into shorter string*/
let organization = 'saucelabs'
let access = 'public'

async function main() {
  const { data } = await octokit.repos.listForOrg({
    org: organization,
    type: access,
  })

  for (const d of data) {
    const tmpDir = await createTempDirectory(d.name)
    await git.clone(d.clone_url, tmpDir)
    const repolinterConnect = await repolinter.lint(tmpDir) /*execute repolinter default ruleset*/
    const print = await repolinter.jsonFormatter.formatOutput(repolinterConnect) /*JS Object return into json*/

    const negResults = repolinterConnect.results /* filter messages for what didn't passed */
      .filter(r => r.lintResult && !r.lintResult.passed)
      .map(r => r.lintResult.targets.map(p => p.pattern))

    const negFiltered = JSON.stringify(negResults, null, 2)

    const posResults = repolinterConnect.results.every(r => r.lintResult && r.lintResult.passed)

    log(chalk`{blue Repository: ${d.name}}\n
      {greenBright Passed: ${posResults}}\n
      {red Failled: ${negResults}\n}`)

    // log(chalk`{greenBright Repository: ${d.name}}\n
    //   {blue Url: ${d.clone_url}}\n
    //   Default message: ${results}\n`)
  }
}

/**
 * list of things
 * - return with an error if validation fails for all results
 * - create report
 *     - print repository name and status of the linting
 *     - Format: linterResults/saucelabs/monocle/20201029-111510/analysis.json
                YYYYMMDD-HHmmSS
 *     - if fails: list failures
 * - also allow access to private repos
 */

// allows to be executed when not used as an imported file
if (require.main === module) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
