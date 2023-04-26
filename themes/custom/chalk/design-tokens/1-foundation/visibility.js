const processTokens = require('../../utils/processTokens')

const visibility = {
  hidden: 'hidden',
  visible: 'visible',
}

module.exports = { founVisibility: processTokens.generateTokens(visibility) }
