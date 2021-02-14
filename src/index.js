const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */
const repolinter = require('repolinter') /*project which this is build upon */
const git = require('simple-git/promise')() /*lib for GitHub API */
const chalk = require('chalk')

const path = require('path')
const fs = require('fs')
const os = require('os')

const main = require('./organization')
const mainUser = require('./user')

const {
  printResults,
  validateChangeLog,
  positiveResults,
  negativeResults,
  createJsonDashboardFile,
} = require('./utils')

const organization = process.argv[2] || 'saucelabs'
const access = 'public'
const user = 'apifortress'

/* This variable stores the sum of all analised repositories which results are all positives */
let passingRepositories = 0

async function index() {
  if (organization !== octokit.orgs) {
    mainUser()
  }

  main()
}

/* allows to be executed when not used as an imported file */
if (require.index === module) {
  index().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = index
