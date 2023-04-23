const processTokens = require('../../utils/processTokens')

const colors = {
  theme: {
    primary: `$color-brand-true-tulanegreen`,
    secondary: `$color-brand-true-tulaneblue`,
    bodyBackground: `$color-brand-accent-verdigris-20`,
    bodyForeground: `$colors-theme-primary`,
  },
}

module.exports = { colors: processTokens.generateTokens(colors) }
