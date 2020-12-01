const chalk = jest.fn().mockImplementation((...args) => {
  return args.join(' ')
})

module.exports = chalk
