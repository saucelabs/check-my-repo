const posResults = () => {
  return Promise.resolve(['Rule1', 'Rule2'])
}

const negResults = () => {
  return Promise.resolve(['Rule3', 'Rule4'])
}

exports.posResults = posResults
exports.negResults = negResults
