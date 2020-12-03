const { results } = require('../__fixtures__/results')

const repolinter = {
  runRuleset: true,
  lint: jest.fn().mockReturnValue(Promise.resolve(results)),
  jsonFormatter: {
    formatOutput: jest.fn().mockReturnValue(Promise.resolve(JSON.stringify({ hello: 1 }))),
  },
}
module.exports = repolinter
