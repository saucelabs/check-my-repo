<template>
  <div>
    <div class="square content">
      <h1>About</h1>
      <p>
        Aiming to help Open Source Software OSS maintainers we, at the <a href="https://opensource.saucelabs.com" target="_blank" rel="noopener">Sauce Labs Open Source Program Office</a>,
        created Check-My-Repo.
        <br>
        <br>
        An automated tool built upon <a href="https://todogroup.github.io/repolinter/" target="_blank" rel="noopener">Repolinter</a>,
        that verifies if the main necessary parameters to comply with <a href="https://opensource.guide/building-community/" target="_blank" rel="noopener">open source best practices</a>, from Readme to License,
        are present in the organization's repositories.
        <br>
        <br>
        By automating this verification open source projects maintenance is more effective and effortless,
        and can help you and your organization to have compliant software projects easier to service, test, upgrade, and maintain.
        <br>
        <br>
        To implement it in your organization all you need to do is to <a href="https://github.com/saucelabs/check-my-repo" target="_blank" rel="noopener">fork the repository on GitHub</a>. It's that easy.
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
  text-align: left;
  margin-bottom: 50px;
}

h2 {
  text-align: left;
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>
