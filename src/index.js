const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }) /*lib for GitHub API */
const repolinter = require('repolinter') /*project which this is build upon */
const git = require('simple-git/promise')() /*lib for GitHub API */
const chalk = require('chalk')

const repository = process.env.GITHUB_REPOSITORY

if (repository == null) {
  throw 'This GitHub user apparently does not exist';
}

const [owner] = repository.split('/')

const path = require('path')
const fs = require('fs')
const os = require('os')
const ruleSet = require('./ruleset.json')

const {
  printResults,
  validateChangeLog,
  positiveResults,
  negativeResults,
  createJsonDashboardFile,
} = require('./utils')

/* This variable stores the sum of all analysed repositories which results are all positives */
let passingRepositories = 0

async function main() {

  /* Verifies if it is an organization or a user */
  const { data: { type } } = await octokit.request(`GET /users/${owner}`)

  const ORGANIZATION = 'Organization'
  const fetchRepos = type === ORGANIZATION ? octokit.repos.listForOrg : octokit.repos.listForUser

  /* Stores pagination iteration results */
  const results = []
  /* Parameters to call octokit API requests */
  const parameters = {
      org: owner,
      username: owner,
      per_page: 100,
  }

  /* This function allows to iterate over all pagination, as explained in documentation */
  for await (const response of octokit.paginate.iterator(fetchRepos, parameters))
    {
      results.push(...response.data)
    }

  /* Output is an array of objects to be sent to frontend through frontend.json */
  const output = []

  for (const repository of results) {
    // Avoiding analysis of archived repositories, and avoid the .github repo
    if (!repository.archived && repository.name !== '.github') {
      const tmpDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), `repolinter-${repository.name}-`))
      await git.clone(repository.clone_url, tmpDir)
      const repolinterConnect = await repolinter.lint(tmpDir, [], ruleSet)

      /* Validates if Changelog rule passed, of not, search for releases */
      await validateChangeLog(repolinterConnect.results, owner, repository.name)

      /* Print in all the results in terminal */
      printResults(repository, repolinterConnect.results)

    /* Creates an array to check its length and sum all passing results without a loop */
    const hasFailures =
      repolinterConnect.results /* filter messages for what didn't passed */
        .filter(result => !(result?.lintResult?.passed ?? false)).length > 0
    if (!hasFailures) {
      passingRepositories++
    }

      /* Push individual repos results to the array which will contain all the results */
      output.push({
        repo: repository.owner.html_url,
        name: repository.name,
        url: repository.clone_url,
        failed: negativeResults(repolinterConnect.results),
        passed: positiveResults(repolinterConnect.results),
      })
    }
  }
  /* Creates one .json file in frontend public folder to make this results available */
  await createJsonDashboardFile(output)

  console.log(chalk(`
    😨 Total repositories with fails = {redBright.bold ${output.length - passingRepositories}}
    😌 Total healthy repositories = {greenBright.bold ${passingRepositories}}
    Number of repositories analysed: {cyanBright.bold ${output.length}}
  `))
}

/* allows to be executed when not used as an imported file */
if (require.main === module) {
  main().then(
    () => console.log('Validation successful!'),
    err => console.log('Validation failed:', err.stack)
  )
}

module.exports = main
