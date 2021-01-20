# Check My Repo

**Check My Repo** is a tool for OSPOs - Open Source Program Offices - to automatically check their repositories health and quality.
Built upon [Repolinter](https://github.com/todogroup/repolinter) and using [open source best practices](https://opensource.guide/building-community/) as reference, this tool verifies if all public repositories under an organization contains:

- [] Readme.md file
- [] Changelog.md file or uses GitHub Releases
- [] Codeowners file with a “Maintain” role
- [] License file
- [] Security: if does not have binaries
- [] Test directory

Although part of best practices, as all Sauce Labs repositories are under SauceLabs:

- [x] Code of conduct
- [x] Contribution guidelines
- [x] Support file
      This tool does not check for those files, but they can easily be implemented on your project by adding them into **repolinter.json** configuration file, using [repolinter dafault file](https://github.com/todogroup/repolinter/blob/master/rulesets/default.json).

## How does it works

This application can run locally or under a GitHub pages. 
This is [SauceLabs OSPO Check-My-Repo](https://opensource.saucelabs.com/check-my-repo/)
It is setup to daily lint all of our respositories and redeploy to this page using [GitHub Actions CI/CD](https://github.com/features/actions). This means that information is updated daily automalicaly.

## Technologies used

This project is build with

- [Node.js v14](https://nodejs.org/en/)
- [Vue.js 3 cli](https://v3.vuejs.org/)
- [Repolinter](https://www.npmjs.com/package/repolinter)
- [Octokit](https://www.npmjs.com/package/@octokit/rest)
- [GitHub Actions CI/CD](https://github.com/features/actions)

## How to make it run on your machine

### To run in terminal

1. Clone this project

```
git clone https://github.com/saucelabs/check-my-repo.git
```

2. Install dependencies

```
npm install
```

3. Run script

```
node src/index.js
```

It enables you to verify all Sauce Labs public repositories, as it is set up as default.
If you would like to check your own organization repos, run:

```
node src/index.js <your organization github name>
```

You can also change the code at [src/index.js](https://github.com/saucelabs/check-my-repo/blob/main/src/index.js) line 19, to your organization's name

```
const organization = process.argv[2] || 'saucelabs'
```

### To run in browser

4. Open frontend folder

```
cd frontend
```

5. Install dependencies
```
npm install
```

6. Run server

```
npm run serve
```

7. Open in browser network link provided in terminal

```
Cmd + click
```

8. Click **Repositories** button to check all repositories fail results or **Healthy Repos** button to see the list of all of your fully healthy repositories

If you have any questions or comments, get in touch with us [opensource@saucelabs](mailto:opensource@saucelabs.com)

### Prerequisites

You need to have Node.js install version 12 or latter.
This project is currently using version 14.
To check if you have and which Node.js version you can type:

```
node -v
```

## Running the tests

To run tests, run

```
npm test
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our process for submitting pull requests, and please ensure you follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/saucelabs/check-my-repo).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to [Todo Group](https://todogroup.org/) for developing Repolinter and kindly supporting us during this development.
