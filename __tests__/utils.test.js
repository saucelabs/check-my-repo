const { printResults, createJsonFile, validateChangeLog } = require('../src/utils')
const results = require('./__fixtures__/results')
const resultsPassed = require('./__fixtures__/results-passed')
const { createdInstances } = require('@octokit/rest')

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
  /* if directory exists */
  fs.existsSync.mockReturnValue(true)
  /* call the function to test */
  await createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).not.toHaveBeenCalled()
  expect(fs.promises.writeFile).toHaveBeenCalledTimes(1)
})

test('should check if releases exists, when changelog rule fails', async () => {
  /* Instead of creating a fixture, having the result inside the test avoids the results to be changed by other tests */
  const failedResults = [
    {
      lintResult: {
        passed: false,
      },
      ruleInfo: {
        name: 'Changelog',
      },
    },
  ]
  await validateChangeLog(failedResults, organization, repository)
  expect(failedResults).toMatchObject([{ lintResult: { passed: true }, ruleInfo: { name: 'Changelog' } }])
})

test('should not change changelog rule fails, if releases also do not exists', async () => {
  const failedResults = [
    {
      lintResult: {
        passed: false,
      },
      ruleInfo: {
        name: 'Changelog',
      },
    },
  ]
  await validateChangeLog(failedResults, organization, 'repository without releases')
  expect(failedResults).toMatchObject([{ lintResult: { passed: false }, ruleInfo: { name: 'Changelog' } }])
})

test('should stop if rule does not exists', async () => {
  await validateChangeLog(results, organization, 'repository without releases')
  expect(createdInstances[0].repos.listReleases).not.toHaveBeenCalled()
})

/* Teardown: clear the mocks and results to avoid false results */
afterEach(() => {
  fs.promises.mkdir.mockClear()
  fs.promises.writeFile.mockClear()
  createdInstances[0].repos.listReleases.mockClear()
})
