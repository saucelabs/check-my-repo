const results = [
  {
    repository: '1',
    rules: {
      rule1: {
        name: 'Rule1',
        status: 'passed',
      },
      rule2: {
        name: 'Rule2',
        status: 'failed',
      },
      rule3: {
        name: 'Rule3',
        status: 'failed',
      },
    },
  },
  {
    repository: '2',
    rules: {
      rule4: {
        name: 'Rule4',
        status: 'failed',
      },
      rule5: {
        name: 'Rule5',
        status: 'passed',
      },
      rule6: {
        name: 'Rule6',
        status: 'passed',
      },
    },
  },
]

exports.results = results
