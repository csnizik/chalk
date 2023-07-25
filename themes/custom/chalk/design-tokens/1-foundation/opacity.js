const processTokens = require('../../utils/processTokens')

const opacity = {
  transparent: 0,
  opacity25: 0.25,
  opacity50: 0.5,
  opacity75: 0.75,
  opaque: 1,
}

module.exports = { foundationOpacity: processTokens.generateTokens(opacity) }
