const processTokens = require('../../utils/processTokens')

const zIndex = {
  bottom: -100,
  0: 0,
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  999: 999,
  top: 99999,
}

module.exports = { frZIndex: processTokens.generateTokens(zIndex) }
