/* Variable to store the instance of Octokit class and make it available to test */
const createdInstances = []
/* Mocks Octokit API functionality */
class Octokit {
  constructor() {
    this.repos = {
      listReleases: jest.fn().mockImplementation(({ owner, repo, per_page }) => {
        if (repo === 'repository without releases') {
          return {
            data: [],
          }
        }
        /* An empty objetct is an information in the array */
        return { data: [{}] }
      }),
    }
    /* Stores instantiation */
    createdInstances.push(this)
  }
}

module.exports = { Octokit, createdInstances }
