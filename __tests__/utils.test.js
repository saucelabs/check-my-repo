const { createTempDirectory, printResults, formatedDate } = require('../src/utils')
const fs = require('fs')
jest.mock('fs')

// using TDD to verify if real function is well written
describe('filtering data', () => {
  it('should filter positive results', () => {
    const posResults = Object.values(results)
      .filter(r => r.status == 'passed')
      .map(r => r.rule.name)

    expect(posResults).toEqual(['Rule1', 'Rule5', 'Rule6'])
  })
})

it('should print a result nicely', () => {
  expect(printResults()).toBe(posResults, negResults)
})

it('should create new formated date', () => {
  jest.spyOn(global, 'Date').mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z'))
  expect(formatedDate().toEqual(new Date('2019-05-14T11')))
})
