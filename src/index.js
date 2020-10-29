// Copyright 2020 Sauce Labs. All rights reserved
// Licensed under the MIT License

const rainbowPenguin = require('rainbow-penguin')() /*lib for self.care while developing - delete when finish */

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

  // loop over the list of repository urls
  const urls = data.map(obj => obj.clone_url)

  for (const url of urls) {
    // convert url in local repo
    await git.clone(url, './tmp')
    // execute repolinter default ruleset
    const repolinterConnect = await repolinter.lint('./tmp')
    console.log(repolinterConnect.results)

    // filter messages for what didn't passed
    const results = repolinterConnect.results
      .filter(r => r.lintResult && !r.lintResult.passed)
      .map(r => r.lintResult.message)
    console.log(`In the repo ${url} there are a few missing things: ${results}\n`)
    //     const results = lintResult.results.filter(r => r.ruleInfo.level === 'error').map(r => r.ruleInfo.name)
    //     console.log(`In the repo ${url} there are a few missing things: ${results}\n`)
  }
}

/**
 * list of things
 * - return with an error if validation fails for all results
 * - create report
 *     - print repository name and status of the linting
 *     - if fails: list failures
 * - ...
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
