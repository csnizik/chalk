const processTokens = require('../../utils/processTokens')

const colors = {
  theme: {
    primary: `$fr-color-brand-true-tulanegreen`,
    secondary: `$fr-color-brand-true-tulaneblue`,
    bodyBackground: `$fr-color-brand-accent-verdigris-20`,
  },
}

module.exports = { coColors: processTokens.generateTokens(colors) }
