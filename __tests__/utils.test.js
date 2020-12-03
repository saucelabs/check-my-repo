const { printResults, createJsonFile } = require('../src/utils')
const results = require('./__fixtures__/results')
const resultsPassed = require('./__fixtures__/results-passed')

const fs = require('fs')
jest.mock('fs')
fs.promises = { mkdir: jest.fn(), writeFile: jest.fn() }

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

test('should create organization directory, if it does not exists', () => {
  const repository = 'repository'
  const organization = 'organization'
  const directory = 'test-path'
  // if file does not exists
  jest.mock('fs').mockReturnValue(Promise.resolve(directory), false)
  // call the function to test
  createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).toHaveBeenCalled()
})

test('should not create an organization directory if already exists', () => {
  const repository = 'repository'
  const organization = 'organization'
  const directory = 'test-path'
  // if file does not exists
  fs.existsSync.mockReturnValue(true)
  // call the function to test
  createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).not.toHaveBeenCalled()
})
