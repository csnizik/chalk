const processTokens = require('../../utils/processTokens')

const visibility = {
  hidden: 'hidden',
  visible: 'visible',
}

module.exports = { foundationVisibility: processTokens.generateTokens(visibility) }
