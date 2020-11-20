const Main = require('../src/index')
const fs = require('fs')

jest.mock('fs')

it("should create a new directory if one doesn't already exist", () => {
  // set up existsSync to meet the `if` condition
  fs.existsSync.mockReturnValue(false)

  // call the function that you want to test
  Main.main('test-path')

  // make your assertion
  expect(fs.mkdir).toHaveBeenCalled()
})

it('should NOT create a new directory if one already exists', () => {
  // set up existsSync to FAIL the `if` condition
  fs.existsSync.mockReturnValue(true)

  Main.main('test-path')

  expect(fs.mkdir).not.toHaveBeenCalled()
})
