const { printResults, createJsonFile, validateChangeLog } = require('../src/utils')
const results = require('./__fixtures__/results')
const resultsPassed = require('./__fixtures__/results-passed')
const resultsFailed = require('./__fixtures__/results-failed')
const releases = require('./__fixtures__/releases')

const fs = require('fs')
jest.mock('fs')
fs.promises = { mkdir: jest.fn(), writeFile: jest.fn() }

const repository = 'repository'
const organization = 'organization'

test('should filter passed results', () => {
  const data = { name: 'repository' }
  const log = jest.fn()
  printResults(data, results, log)

  expect(log.mock.calls).toMatchSnapshot()
})

test('should return global all passed when there is no fail', () => {
  const data = { name: 'repository' }
  const log = jest.fn()
  printResults(data, resultsPassed, log)

  expect(log.mock.calls).toMatchSnapshot()
})

test('should create organization directory, if it does not exists', async () => {
  // if directory does not exists
  fs.existsSync.mockReturnValue(false)
  // call the function to test
  await createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).toHaveBeenCalled()
  expect(fs.promises.writeFile).toHaveBeenCalledTimes(1)
})

test('should not create organization directory, if it exists', async () => {
  // if directory exists
  fs.existsSync.mockReturnValue(true)
  // call the function to test
  await createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).not.toHaveBeenCalled()
  expect(fs.promises.writeFile).toHaveBeenCalledTimes(1)
})

test('should check if releases exists, when chengelog rule fails', async () => {
  await validateChangeLog(results, organization, repository)
  const changelogResult = false
  const hasReleases = results.ruleInfo === 'failing-repo'

  // expect(resultsFailed).toHaveProperty(resultsFailed.lintResults.passed, true)
  expect(resultsFailed).toMatchObject([{ lintResult: { passed: true }, ruleInfo: { name: 'failing-repo' } }])
})

// clear the mocks
afterEach(() => {
  fs.promises.mkdir.mockClear()
  fs.promises.writeFile.mockClear()
})
