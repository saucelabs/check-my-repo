const { results } = require('../__fixtures__/results')

const repolinter = {
  runRuleset: true,
  lint: jest.fn().mockReturnValue(Promise.resolve(results)),
}

module.exports = repolinter
