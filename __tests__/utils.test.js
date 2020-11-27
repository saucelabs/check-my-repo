const { createTempDirectory, formatedDate, printResults } = require('../src/utils')

const fs = require('fs')
const { results, data } = require('../src/__mocks__/results')
jest.mock('fs')

jest.mock('../src')

describe('filtering data', () => {
  it('should filter passed results', () => {
    printResults(data, results)
    const posResults = results /* filter messages for what didn't passed */
      .filter(r => r.rules && r.rules.status)
      .map(r => results.repository && r.repository)
    expect(posResults).toEqual(expect.arrayContaining([expect.objectContaining({ status: 'passed' })]))
  })

  it('should filter failed results', () => {
    printResults(data, results)
    const negResults = results /* filter messages for what didn't passed */
      .filter(r => r.rules && r.rules.status.failed)
      .map(r => results.repository && r.repository.name)
    expect(negResults).toEqual(expect.arrayContaining([expect.objectContaining({ status: 'failed' })]))
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
