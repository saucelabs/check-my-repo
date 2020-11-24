const { createTempDirectory, printResults, formatedDate } = require('../src/utils')
const fs = require('fs')
jest.mock('fs')

it("should create a new directory if one doesn't already exist", () => {
  // set up existsSync to meet the `if` condition
  fs.existsSync.mockReturnValue(false)
  createTempDirectory().then(path => {
    expect(fs.mkdtemp).toHaveBeenCalled()
  })
})

it('should print a result nicely', () => {
  expect(printResults()).toBe(posResults, negResults)
})

it('should create new formated date', () => {
  jest.spyOn(global, 'Date').mockImplementationOnce(() => new Date('2019-05-14T11:01:58.135Z'))
  expect(formatedDate().toEqual(new Date('2019-05-14T11')))
})
