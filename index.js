// Copyright 2020 Sauce Labs. All rights reserved
// Licensed under the MIT License

const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()

// integrate repolinter
const repolinter = require('repolinter')

async function main() {
  return octokit.repos
    .listForOrg({
      org: 'saucelabs',
      type: 'public',
    })
    .then(({ data }) => {
      const urls = data.map(function (obj) {
        return obj.git_url
      })
      console.log(urls)
    })

  /**
   * list of things
   * - list of repository urls
   * - integrate repolinter (import)
   * - loop over the list of repository urls
   *     - execute repolinter with default ruleset
   * - ...
   * - also allow access to private repos
   */
}

// allows to be executed when not used as an imported file
if (module.children) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
