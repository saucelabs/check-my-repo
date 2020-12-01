const { printResults } = require('../src/utils')
const results = require('./__fixtures__/results')

test('should filter passed results', () => {
  const data = { name: 'repository' }
  const log = jest.fn()
  printResults(data, results, log)

  expect(log.mock.calls).toMatchSnapshot()
})
