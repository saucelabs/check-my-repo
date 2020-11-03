// Copyright 2020 Sauce Labs. All rights reserved
// Licensed under the MIT License

const rainbowPenguin = require('rainbow-penguin')() /*lib for self.care while developing - delete when finish */

const chalk = require('chalk')
const log = console.log

const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit() /*lib for GitHub API */
const repolinter = require('repolinter') /*project which this is build upon */
const git = require('simple-git/promise')() /*lib for GitHub API */
const fs = require('fs')
const os = require('os')
const path = require('path')

async function main() {
  // list public repository urls
  const { data } = await octokit.repos.listForOrg({
    org: 'saucelabs',
    type: 'public',
  })

  for (const d of data) {
    let tmpDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'repolinter-'))
    // console.log(tmpDir)
    await git.clone(d.clone_url, tmpDir)
    const repolinterConnect = await repolinter.lint(tmpDir) /*execute repolinter default ruleset*/
    const print = await repolinter.jsonFormatter.formatOutput(repolinterConnect)
    fs.writeFileSync(path.resolve('./reports', `${Date()}-${d.name}`), JSON.stringify(print))

    // filter messages for what didn't passed
    const results = repolinterConnect.results
      .filter(r => r.lintResult && !r.lintResult.passed)
      .map(r => r.lintResult.message)

    log(chalk`{greenBright Repository: ${d.name}}\n
      {blue Url: ${d.clone_url}}\n
      {blackBright Temporary directory: ${tmpDir}}\n
      Default message: ${results}\n`)

    // console.log(`
    //   License: ${results.license}
    // `)
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
