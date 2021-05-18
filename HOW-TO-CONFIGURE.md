# How to configure/ personalize check-my-repo

Follow a few instructions on how to configure/ personalize your check-my-repo application

## Configuring Environment Variables/ GitHub Secrets

When running locally it is important to provide a GITHUB_TOKEN to avoid rate limiting. To know more about it, visit:  [GitHub documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#:~:text=When%20using%20the%20built%2Din,to%2060%20requests%20per%20hour.)

This will not happen when running through CI/CD as it is set up as authenticated user using GutHub’s default secret: GITHUB_TOKEN. You can change this at: src/index.js line 2:

```
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
```

## Personalizing CSS Style

Application main configuration is defined at `./frontend/src/App.vue`.

Although Vue works with scoped styles, most of the application styles are defined in variables, which makes changes easy and simple.

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

## Changing Rules

Check-My-Repo is built upon [Repolinter](https://todogroup.github.io/repolinter/), but does not used all their default rules as default.

To add [see all Repolinter rules](https://github.com/todogroup/repolinter/blob/master/rulesets/default.json) please refer directly to their documentation. Check-My-Repo rules can be modified at `./repolinter.json` file in the project root.

### Changing Badges With Modified Rules

If ou do change a rule, make sure to change your badges.

This is the default ruleset badges, found at: `./frontend/src/components/Details.vue`

```
<span v-if="item.includes('Do not have binaries')" class="badge high"> Binaries </span>
<span v-if="item.includes('License')" class="badge high"> License </span>
<span v-if="item.includes('README.md')" class="badge hight"> Readme </span>
<span v-if="item.includes('Changelog')" class="badge medium"> Changelog </span>
<span v-if="item.includes('Contributing')" class="badge medium"> Contributing </span>
<span v-if="item.includes('Maintainers email')" class="badge medium"> Ownership </span>
<span v-if="item.includes('Test directory')" class="badge medium"> TestDir </span>
<span v-if="item.includes('Code of Conduct')" class="badge low"> CodeOfConduct </span>
<span v-if="item.includes('Mention')" class="badge low"> LicenseOnReadme </span>
<span v-if="item.includes('Security')" class="badge low"> Security </span>
<span v-if="item.includes('Support')" class="badge low"> Support </span>
```
Where:
- [] `item.includes` searches for the rule name specified in `repolinter.json`
- [] `high`, `medium` or `low` changes the css style of the badges

## Changing Logo

Application uses now Sauce Labs Bot as a default logo. You can change it to yout own logo just switching the `logo.svg` file at `./frontend/public` folder.

## Checking for accessibility after modifying the application

Check-My-Repo uses [vue-axe](https://www.npmjs.com/package/vue-axe) in development mode to acessibility verification.

You can check if something is missing on your Browsers console, or disable it in `./frontend/main.js` file, by turning to `auto: false`

```
if (process.env.NODE_ENV === 'development') {
  const VueAxe = require('vue-axe').default
  Vue.use(VueAxe, {
  auto: true  // enable auto check.
})
```
