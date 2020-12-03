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

test('should create organization directory, if it does not exists', async () => {
  const repository = 'repository'
  const organization = 'organization'
  // if directory does not exists
  fs.existsSync.mockReturnValue(false)
  // call the function to test
  await createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).toHaveBeenCalled()
  expect(fs.promises.writeFile).toHaveBeenCalledTimes(1)
})

test('should create organization directory, if it does not exists', async () => {
  const repository = 'repository'
  const organization = 'organization'
  // if directory exists
  fs.existsSync.mockReturnValue(true)
  // call the function to test
  await createJsonFile(repository, organization, results)
  expect(fs.promises.mkdir).not.toHaveBeenCalled()
  expect(fs.promises.writeFile).toHaveBeenCalledTimes(1)
})

// clear the mocks
afterEach(() => {
  fs.promises.mkdir.mockClear()
  fs.promises.writeFile.mockClear()
})
