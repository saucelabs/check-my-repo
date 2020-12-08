const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit() /*lib for GitHub API */

/* Verify if a repository has releases */
const checkReleases = async function (owner, repo) {
  const r = await octokit.repos.listReleases({
    owner: owner,
    repo: repo,
    // repo: 'sauce-playwright-runner' /* repo with releases */,
    // repo: 'new-project' /* repo without releases */,
    per_page: 100,
  })
  if (r.data === undefined || r.data.length == 0) {
    return false
  } else {
    // const howManyReleases = r.data.length /* how many releases the repository has */
    return true
  }
}
//releases('saucelabs', 'sauce-playwright-runner') /* calling function to test */

module.exports = checkReleases
