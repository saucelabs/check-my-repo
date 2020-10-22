// Copyright 2020 Sauce Labs. All rights reserved
// Licensed under the MIT License
const rainbowPenguin = require('rainbow-penguin')()

const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()

// integrate repolinter
const repolinter = require('repolinter')

async function main() {
  // list public repository urls
  const { data } = await octokit.repos.listForOrg({
    org: 'saucelabs',
    type: 'public',
  })

  // loop over the list of repository urls
  const urls = data.map(obj => obj.clone_url)

  // execute repolinter default ruleset
  for (const url of urls) {
    const lintResult = await repolinter.lint(url)
    console.log(lintResult.results)
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
}

// allows to be executed when not used as an imported file
if (require.main === module) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
