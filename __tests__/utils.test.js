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

describe('creating an org directory when do not exists', () => {
  it("should create a new directory if one doesn't already exist", () => {
    fs.existsSync.mockReturnValue(false)
    createTempDirectory('test-path')
    expect(fs.promises.mkdtemp, 'test-path').toHaveBeenCalled()
  })
})

describe('returning a new Date as a formated string', () => {
  it('should return a formated date', () => {
    jest.spyOn(formatedDate, 'Date').mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z').valueOf())
    expect(formatedDate).toEqual('2019-05-14T11')
  })
})
