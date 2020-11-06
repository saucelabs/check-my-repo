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
const path = require('path')

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

    if (!fs.existsSync(`./${organization}`)) {
      await fs.promises.mkdir(`./${organization}`)
    }

    await fs.promises.writeFile(
      path.resolve(`./${organization}`, `${date}-${d.name}.json`),
      JSON.stringify(JSON.parse(print), null, 2)
    ) /*creates json file*/
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
