const processTokens = require('../../utils/processTokens')

const transition = {
  delay: {
    fast: '0.333s',
    medium: '0.666s',
    slow: '1s',
  },
  duration: {
    fast: '0.333s',
    medium: '0.666s',
    slow: '1s',
  },
  timingFunction: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    springySm: 'cubic-bezier(0.25, 0.8, 0.25, 1.1)',
    springyLg: 'cubic-bezier(0.33, -0.33, 0.33, 1.33)',
  },
}

module.exports = {
  frTransition: processTokens.generateTokens(transition),
}
