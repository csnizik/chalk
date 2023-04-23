const processTokens = require('../../utils/processTokens')

const position = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
}

module.exports = { frPosition: processTokens.generateTokens(position) }
