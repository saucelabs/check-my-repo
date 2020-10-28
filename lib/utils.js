// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js
// const simpleGit = require('simple-git')
// const git = simpleGit()

const path = require('path')
const rimraf = require('rimraf')
const git = require('simple-git/promise')()
/** @type {any} */
const fs = require('fs')
const os = require('os')
// temporarily clone a git repo to lint
exports.tempGitClone = async function () {
  if (argv.git) {
    tmpDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'repolinter-'))
    const result = await git.clone(argv.directory, tmpDir)
    if (result) {
      console.error(result)
      process.exitCode = 1
      rimraf(tmpDir, () => {})
      return
    }
  }
}
