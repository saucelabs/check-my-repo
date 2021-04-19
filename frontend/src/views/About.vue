<template>
  <div>
    <div class="square content">
      <h1>About</h1>
      <p>
        A demanding and complex Open Source Program Offices’ task is to guarantee the health of its organization repositories.
      </p>
      <p>
        Aiming to help Open Source Program Offices OSPO and Open Source communities, we, at <a href="https://opensource.saucelabs.com/" target="_blank" rel="noopener">Sauce Labs OSPO</a>, created Check-My-Repo, an automated tool built upon <a href="https://www.npmjs.com/package/repolinter" target="_blank" rel="noopener">Repolinter</a>, that verifies the main necessary parameters to comply with OS best practices: from Readme to License.
        By automating this verification OSPO’s maintenance is more effective and effortless, and can help your organization to have compliant software projects easier to service, test, upgrade, and maintain.
      </p>
      <p>
        Built with Node.js, Repolinter and Vue.js, it is designed to run local and automated, displaying results on GitHub page.
        Just fork it and adjust it to your own configurations using a simple json file.
      </p>
      <p>
        To know more about it, fork it and use it, go to the <a href="https://github.com/saucelabs/check-my-repo" target="_blank" rel="noopener">project repository on GitHub</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  name: 'About'
}
</script>

<style scoped lang="scss">
.square {
  text-align: left;
  margin: 1% 15%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border-top: 5px solid var(--primary-color);
  border-radius: 7px;
}
.content {
  font-size: 1.1em;
  padding: 12%;
  margin: 3%;
  background-color: var(--square-background-color);
}

.quote {
  font-style: italic;
  margin-left: 30px;
  font-size: 1em;
}

h1 {
  text-align: right;
  margin-bottom: 50px;
}

h2 {
  text-align: right;
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>
