<template>
  <div class="square content">
    <h1>Rules</h1>
    Check-My-Repo uses a ruleset that searches for files considered essential in an open source project, according to best practices.
    In order to help filter the emergence of necessary actions on the missing of those files,
    we have separated the rules into: low, medium or high priority.
    Badges help to visually understand these priorities.
    <br>
    <br>
    Following is a brief explanation of what each of these rules means and the importance of complying with them:
    <br>
    <br>
    <span class="badge high">Binaries</span>
    <p>The security rule looks for binary files, executables and passwords, which should not be contained in an open project.</p>

    <span class="badge high">License</span>
    <p>Compliance with open source software (OSS) license requirements is necessary, and complex.
      Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly.
      It is also important to protect you legally.
      If you want to understand it better, we highly recommend you to take the free certificate from <a href="https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/" target="_blank" rel="noopener">Linux Foundation</a>.
      Check-my-repo searches for a License file or a license mentioned on README file.
    </p>

    <span class="badge high">Readme</span>
    <p>A friendly README and clear code examples will make it easier for anyone who lands on your project to get started.
      It is about knowing your audience and their needs.
      The <a href="https://opensource.guide/" target="_blank" rel="noopener">Open Source Guide</a> reminds us that the README is more than just a set of instructions, it’s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion.
    </p>

    <span class="badge medium">Changelog</span>
    <p>The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project.
      While Changelog is a file, a <a href="https://semver.org/" target="_blank" rel="noopener">SemVer</a>, a semantic version, may be a better choice in systems with many dependencies.
      Doesn't matter what you choose, this makes it easier for people to understand the development speed of the project, or it's lack of maintenance.
      Check-my-repo searches if the project has a CHANGELOG.md file in the project root or if it contains a release tag on GitHub.
    </p>

    <span class="badge medium">Contributing</span>
    <p>A contributor guideline saves lots of time from both maintainers and contributors.
      Eager contributors rely on it to be their guiding hand.
    </p>

    <span class="badge medium">Ownership</span>
    <p>The main purpose of this file is to ensure someone is assigned to the project and to prevent it from going into the forgetful mode.
      Another reason is to provide a contact for potential contributors. When no one other than the original author has maintenance rights,
      continuation of the project through bifurcation can lead to confusion about the status and reliability of the project.
    </p>

    <span class="badge medium">TestDir</span>
    <p>Having tests on your project can avoid regresion, breaks and so many issues.
      A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them;
      you add security; helps assure quality and digital confidence; which leads to users satisfaction.
    </p>

    <span class="badge low">CodeOfConduct</span>
    <p>A code of conduct establishes expectations and facilitates a healthy and constructive community.
    <p class="quote">When a project seems hostile or unwelcoming, even if it’s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It’s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.</p>
    <p>You can read more about it at <a href="https://opensource.guide/code-of-conduct/#:~:text=as%20a%20maintainer-,Why%20do%20I%20need%20a%20code%20of%20conduct%3F,just%20your%20participants%2C%20but%20yourself." target="_blank" rel="noopener">Open Source Guide</a>.</p>

    <span class="badge low">LicenseOnReadme</span>
    <p>Although the license is valid in any format, as long as it is added to the project, having it in the main file ensures it will be clearly visible.
      So even if the license exists in a separate file it is important to have a mention of it in the README.
      Some projects add copyright and license on the first line of every file of the project.
    </p>

    <span class="badge low">Security</span>
    <p>A SECURITY.md is where a security policy goes, a place to instruct users how to report a security vulnerability.
      This allows users to easily report and maintainers to quickly take actions upon vulnerabilities.
    </p>

    <span class="badge low">Support</span>
    <p>A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues.
      A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues.
      It can include: how and where can a user get help and support, which communication channels should be used and what not to do to avoid communication noise.
      This file helps both users and maintainers to communicate to each other having their needs to get into the right channel.
    </p>
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
  text-align: left;
  margin-bottom: 50px;
}

</style>
