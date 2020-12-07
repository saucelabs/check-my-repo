const { Octokit } = require('@octokit/rest') /* */
const octokit = new Octokit() /*lib for GitHub API */

const releases = async function main() {
  const r = await octokit.repos.listReleases({
    owner: 'saucelabs',
    // repo: 'sauce-connect-action', /* repo with releases */
    repo: 'new-project' /* repo without releases */,
    per_page: 100,
  })

  if (r.data === undefined || r.data.length == 0) {
    console.log('🚨 This project has no releases')
  } else {
    const howManyReleases = r.data.length
    console.log('✅ it has ' + howManyReleases + ' releases so far')
  }
}
releases()

/*
const organization = process.argv[2] || 'saucelabs'
const access = 'public'

async function main() {
  const { data } = await octokit.repos.listForOrg({
    org: organization,
    type: access,
    per_page: 100,
  })
  for (const d of data) {
    const releases = await octokit.repos.listReleases({
      owner: organization,
      repo: d.name,
    })
  }
}

main().releases
*/
