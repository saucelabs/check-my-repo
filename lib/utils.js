// based on repolinter source code https://github.com/todogroup/repolinter/blob/master/bin/repolinter.js
// temporarily clone a git repo to lint

async function tempGitClone() {
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

module.exports = tempGitClone
