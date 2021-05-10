# (Ͼ˳Ͽ)...check-my-repo!!!

Do you want to know how healthy your GitHub repositories are? If so, this is the tool for you!

Aiming to help maintainers of Open Source Software OSS organizations, we, at [Sauce Labs](https://opensource.saucelabs.com/), created [Check-My-Repo](https://opensource.saucelabs.com/check-my-repo/), an automated tool built upon [Repolinter](https://todogroup.github.io/repolinter/), that verifies the main necessary parameters to comply with [open source best practices](https://opensource.guide/building-community/): from Readme to License. By automating this verification open source projects maintenance is more effective and effortless, and can help you and your organization to have compliant software projects easier to service, test, upgrade, and maintain.

Built with [Node.js](https://nodejs.org/en/), [Repolinter](https://www.npmjs.com/package/repolinter) and [Vue.js](https://v3.vuejs.org/), it is designed to run locally and automated, displaying results on your organization’s or user’s GitHub Page.

## How to adopt it into my organization?

Meant to be as easy as possible to enable right away usage, all you need to do is: fork it, and enable Pages choosing gh-pages as your GitHub pages repository. That easy 😊.

https://user-images.githubusercontent.com/7980624/117662543-f566bf00-b19f-11eb-85d2-9bd937d1907b.mov

Using GitHub Actions and default environment variables, it will automatically get our user/ organization public information,

It is designed to be as neutral as possible and comply with A11y accessibility guidelines. But, of course, you can modify all you want, it is open sourced under MIT license. Check  [How to Configure]() file to know how to do it.

## Command Line Step By Step & Running Locally

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) [this project](https://github.com/saucelabs/check-my-repo)

2. Navigate in your terminal into the director you want to clone the repository, for example:

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

7. To run it locally, run the script:

```
node src/index.js
```

It enables you to verify all of your organization’s or user’s public repositories.
You need to do this process at least once, as this generates a frontend.json file on the frontend/public folder, which will be used to display the information in Browser.

Note: make sure you provide GITHUB_TOKEN to avoid rate limiting. To know more about it, visit:  [GitHub documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#:~:text=When%20using%20the%20built%2Din,to%2060%20requests%20per%20hour.)

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

10. Run server locally

```
npm run serve
```

14. Open link provided in terminal

```
Cmd + click
```

That’s it!
