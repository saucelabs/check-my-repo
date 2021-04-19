<template>
  <div>
    <div class="square content">
      <h1>Rules</h1>
      <p>This application is built upon <a href="https://www.npmjs.com/package/repolinter" target="_blank" rel="noopener">Repolinter</a>. For detail explanation about all rules
       available, please refer to the <a href="https://github.com/todogroup/repolinter/blob/master/docs/rules.md" target="_blank" rel="noopener">documentation</a>.</p>
      <p>Check My Repo uses a shorter ruleset, as all Sauce Labs public repositories are under the same Code of Conduct.
        However, you can easily choose the ruleset that fits you by changing config.file parameters.
        Follow a brief explanation of why such rules are important to comply with:
      </p>
      <ul>
        <li>License</li>
        <p>Compliance with open source software (OSS) license requirements is necessary, and complex.
          Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly.
          It is also important to protect you legally.
          If you want to understand it better, we highly recommend you to take the free certificate from <a href="https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/" target="_blank" rel="noopener">Linux Foundation</a>
        </p>
        <li>Readme</li>
        <p>A friendly README and clear code examples will make it easier for anyone who lands on your project to get started.
          It is about knowing your audience and their needs.
          The <a href="https://opensource.guide/" target="_blank" rel="noopener">Open Source Guide</a> reminds us that the README is more than just a set of instructions, it’s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion.
        </p>
        <li>Changelog</li>
          <p>
            The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project.
            While Changelog is a file, a <a href="https://semver.org/" target="_blank" rel="noopener">SemVer</a>, a semantic version, may be a better choice in systems with many dependencies.
            Doesn't matter what you choose, this makes it easier por people to understand the development speed of the project, or it's lack of maintenance.
          </p>
        <li>Code Ownership</li>
          <p>The main purpose of this archive is to make sure that someone is put in charge of the project and to prevent it from being forgotten. Another point is to provide a contact for potential collaborators.
            When no one but the original author have administration rights or access to the publishing accounts, project continuation through forking can lead to confusion about the state and reliablility of the project.
          </p>
        <li>Security</li>
          <p>The security rule looks for binary files, executables and passwords, which should not be contained in an open project.</p>
        <li>Test Directory</li>
          <p>Having tests on your project can avoid regresion, breaks and so many issues.
            A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them; you add security; helps assure quality and the digital confidence; which leads to users satisfaction.
          </p>
      </ul>
      <h2>Rules you should implement when it is not default by your organization</h2>
      <ul>
        <li>Code of Conduct</li>
          <p>A code of conduct establishes expectations and facilitate healthy and constructive community.</p>
          <p class="quote">When a project seems hostile or unwelcoming, even if it’s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It’s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.</p>
          <p>You can read more about it at <a href="https://opensource.guide/code-of-conduct/#:~:text=as%20a%20maintainer-,Why%20do%20I%20need%20a%20code%20of%20conduct%3F,just%20your%20participants%2C%20but%20yourself." target="_blank" rel="noopener">Open Source Guide</a>.</p>
        <li>Contributors Guidelines</li>
          <p>A guideline save lots of time from both maintainers and contributors.
            Eager contributors rely on it to be their guiding hand.
          </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {  },
  name: 'Rules'
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
  background-color: #2E3137;
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
