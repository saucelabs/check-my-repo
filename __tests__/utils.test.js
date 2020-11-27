const { createTempDirectory, printResults, formatedDate } = require('../src/utils')

const fs = require('fs')
const { results, data } = require('../src/__mocks__/results')
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

describe('utils functions test', () => {
  it("should create a new directory if one doesn't already exist", () => {
    // set up existsSync to meet the `if` condition
    fs.existsSync.mockReturnValue(false)
    // const mkdtemp = jest.spyOn(createTempDirectory(), 'fs.mkdtemp')
    // createTempDirectory().then(path => {
    //   expect(fs.promises.mkdtemp).toHaveBeenCalled()
    // })
    createTempDirectory('test-path')
    expect(fs.promises.mkdtemp).toHaveBeenCalled()
  })

  it('should create new formated date', () => {
    jest.spyOn(global, 'Date').mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z'))
    expect(formatedDate).toEqual('2019-05-14T11')
  })
})
