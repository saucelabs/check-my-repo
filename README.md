# (Ͼ˳Ͽ)...check-my-repo!!!

A demanding and complex Open Source Program Offices’ task is to guarantee the health of its organization repositories.

Aiming to help OSPOs and OS communities, we, at [Sauce Labs](https://opensource.saucelabs.com/), created [Check-My-Repo](https://opensource.saucelabs.com/check-my-repo/), an automated tool built upon [Repolinter](https://www.npmjs.com/package/repolinter), that verifies the main necessary parameters to comply with [open source best practices](https://opensource.guide/building-community/): from Readme to License. By automating this verification OSPO’s maintenance is more effective and effortless, and can help your organization to have compliant software projects easier to service, test, upgrade, and maintain.

Built with [Node.js](https://nodejs.org/en/), [Repolinter](https://www.npmjs.com/package/repolinter) and [Vue.js](https://v3.vuejs.org/), it is designed to run locally and automated, displaying results on your organization’s or user’s GitHub Page.

## How to adopt it into my organization?

Just fork it, clone it, and adjust the configuration file to your own organization or user information. That easy 😊. Here it goes the step-by-step:

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) [this project](https://github.com/saucelabs/check-my-repo)

***The following steps consider that you will be using a code editor like [Visual Studio Code](https://code.visualstudio.com/), for example. But you don’t have to, you can directly use GitHub GUI and just change the config.json files

2. Navigate your terminal into the director you want to clone the repository, for example:

```
cd Documents

```

3. Clone your fork (remember to change <your organization>)

```
git clone https://github.com/<your organization>/check-my-repo.git

```

4. Open the cloned directory

```
cd check-my-repo

```

5. Open the repository on your favorite code editor. If you are using VSC you can use .code to open your code editor

```
code .
```

6. Install dependencies

```
npm install
```

6. Change check-my-repo-config.json located in the root directory

```
{
  "owner": "saucelabs",
  "pagination": 100,
  "action-user-name": "OSS Check My Repo",
  "action-email": "oss-check-my-repo-bot@users.noreply.github.com"
}
```
- owner: is your GitHub profile user or organization name
- pagination: is how many results per page you would like to see. It will automatically loop through all the existing pages :)
- action-user-name: no need to change, is just the name used in the GitHub actions
- action-email: also no need to change, you can change it to your email, just remember it will be public


7. To run it locally, run the script:

```
node src/index.js
```

It enables you to verify all of your organization’s or user’s public repositories.
You need to do this process at least once, as this generates a frontend.json file on frontend/public folder, which will be used to display the information in Browser.

You may face an Api rate limit depending on how many requests are needed. To solve it, you need to authenticate. Please refer to [GitHub documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#:~:text=When%20using%20the%20built%2Din,to%2060%20requests%20per%20hour.)

This will not happen when running through CI/CD as it is set up as authenticated user using GutHub’s default secret: GITHUB_TOKEN. You can change this at: src/index.js line 2:
```
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
```

8. Now let’s install your frontend application:

```
cd frontend
```

9. Install frontend dependencies
```
npm install
```

10. Now let’s configure your frontend application

```
frontend/public/config.json
```

Here you can change the name of your logo file (preferably .svg) and the direct link showed in the Home Dashboard

```
{
  "github": "https://github.com/<your organization>",
  "logo": "<your logo file name>.svg"
}
```
Your logo file should be add in the public folder

```
frontend/public/
```

11. CSS configuration

This project uses CSS variables, the fastest way to change it is in the **App.vue** file located in frontend/src directory

```
:root {
  --app-background: #464B54;
  --square-background-color: #2E3137;
  --passed-color: #158906;
  --passed-color-accent: #8CFF4D;
  --failed-color: #e12726;
  --primary-color: #6ED6FF;
  --grey-accent: lightgrey;
  --shadow: rgb(34, 33, 33);
}

```
12. Run server locally

```
npm run serve
```

13. Open link provided in terminal

```
Cmd + click
```

That’s it!

If you have any questions or comments, get in touch with us [opensource@saucelabs](mailto:opensource@saucelabs.com)

## How does it works

This application can run locally or automated using GitHub actions and showing the results unders the organization’s or user’s GitHub Page.
When running locally, it nicely shows you the results in the terminal. It generates a frontend.json file with an array of objects containing the filtered results of this verification process.

![check-my-repo-demo-short](https://user-images.githubusercontent.com/7980624/105194003-72aaed00-5b39-11eb-9643-9bfef5dc2d8a.gif)

This frontend.json file sends data to our frontend application made with Vue.js
This is how, by default, will look like: [Sauce Labs OSPO Check-My-Repo](https://opensource.saucelabs.com/check-my-repo/).
It is set up to daily lint all repositories and re-deploy using [GitHub Actions CI/CD](https://github.com/features/actions). This means that information is updated daily.

### What does it look for?

Check-my-repo used Repolinter rules to check if a repository contains all the minimum files to comply with [open source best practices](https://opensource.guide/building-community/):

- [ ] Readme.md file
- [ ] Changelog.md file or uses GitHub Releases
- [ ] Codeowners file with a “Maintainer” role
- [ ] License file
- [ ] Security: if does not have binaries
- [ ] Test directory

Although part of best practices, the following rules are not part of the default as they are included under all Sauce Labs repositories. Such rules can easily be implemented on your project by adding them into **repolinter.json** configuration file, using [repolinter default file](https://github.com/todogroup/repolinter/blob/master/rulesets/default.json).

- [x] Code of conduct
- [x] Contribution guidelines
- [x] Support file

### Which technologies are used?

This project is build with

- [Node.js v14](https://nodejs.org/en/)
- [Vue.js 3 cli](https://v3.vuejs.org/)
- [Repolinter](https://www.npmjs.com/package/repolinter)
- [Octokit](https://www.npmjs.com/package/@octokit/rest)
- [GitHub Actions CI/CD](https://github.com/features/actions)


## Prerequisites

You need to have Node.js install version 12 or later.
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

If you would like to know more about how to deploy Vue.js to GitHub pages and how to set up GitHub Pages from your repository, I recommend the following articles:
- [Deploying Vue Apps to Github Pages, by Bobby](https://medium.com/swlh/deploy-vue-app-to-github-pages-2ada48d7397e)
- [Vue CLI documentation](https://cli.vuejs.org/guide/deployment.html#general-guidelines) for deployment
- [Getting started with GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/getting-started-with-github-pages)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our process for submitting pull requests, and please ensure you follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/saucelabs/check-my-repo).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to [Todo Group](https://todogroup.org/) for developing Repolinter and kindly supporting us during this development.

