
# (Ͼ˳Ͽ)...check-my-repo!!!


https://user-images.githubusercontent.com/7980624/118667671-7fdc9d80-b7f4-11eb-8d67-e7e0094780af.mov


Aiming to help Open Source Software OSS maintainers we, at the [Sauce Labs Open Source Program Office](https://opensource.saucelabs.com/), created [Check-My-Repo](https://opensource.saucelabs.com/check-my-repo/).
An automated tool built upon  [Repolinter](https://todogroup.github.io/repolinter/), that verifies if the main necessary parameters to comply with [open source best practices](https://opensource.guide/building-community/): from Readme to License, are present in the organizations or users repositories.
By automating this verification open source projects maintenance is more effective and effortless, and can help you and your organization to have compliant software projects easier to service, test, upgrade, and maintain.
Built with [Node.js](https://nodejs.org/en/), [Repolinter](https://www.npmjs.com/package/repolinter) and [Vue.js](https://v3.vuejs.org/), it is designed to run locally and automated, displaying results on your organization’s or user’s GitHub Page.

Meant to be as easy as possible to enable right away usage, all you need to do is: fork it, and enable Pages choosing gh-pages as your GitHub pages repository. That easy 😊.

## How to adopt it into my organization?

1. Fork it
2. Enable Actions on Settings/ Actions Permissions
3. Enable Pages on Settings/ Pages by choosing gh-pages as your GitHub pages repository

https://user-images.githubusercontent.com/7980624/117662543-f566bf00-b19f-11eb-85d2-9bd937d1907b.mov

Using GitHub Actions and default environment variables, it will automatically get our user/ organization public information.

**Please note** that, as Actions are planned to run once a day on cron: '0 0 * * *' time, or when a push is made to the main branch, you need to wait until your organization/ user information is updated in the page.

It is designed to be as neutral as possible and comply with A11y accessibility guidelines. But, of course, you can modify all you want, it is open sourced under MIT license. Check  [How to Configure](#HOW-TO-CONFIGURE) file to know how to do it.

### Trouble-shooting

Even if you enable GitHub Actions, you may need to enable it in 2 other places on the Actions tab. After clicking on the enable button, go back to Settings / Pages and you will see a note saying  your page is published.


https://user-images.githubusercontent.com/7980624/120554885-99880280-c3fa-11eb-8981-1a36d058cead.mov


## Command Line Step By Step & Running It Locally

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) [this project](https://github.com/saucelabs/check-my-repo)

2. Navigate in your terminal into the director you want to clone the repository, for example:

```
cd Documents

```

3. Clone your fork (remember to change "YOUR ORGANIZATION")

```
git clone https://github.com/<YOUR ORGANIZATION>/check-my-repo.git

```

4. Open the cloned directory

```
cd check-my-repo

```

5. Open the repository on your favorite code editor. If you are using VSC you can use `.code` to open your code editor

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
