const processTokens = require('../../utils/processTokens')

const background = {
  size: {
    contain: 'contain',
    cover: 'cover',
  },
  repeat: {
    both: 'repeat',
    none: 'no-repeat',
    x: 'repeat-x',
    y: 'repeat-y',
  },
  position: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    right: 'right',
    top: 'top',
  },
}

module.exports = {
  founBackground: processTokens.generateTokens(background),
}
