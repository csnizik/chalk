const processTokens = require('../../utils/processTokens')

const color = {
  primary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    // trueHeading: ``, Uncomment and use to override suggestions
    trueText: `$fr-color-core-true-red`,
    container: {
      background: `$fr-color-brand-olivebranch`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  secondary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$fr-color-brand-olivebranch`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  tertiary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$fr-color-brand-olivebranch`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
}

processTokens.generateColorSuggestions(color)

module.exports = { coColor: processTokens.generateTokens(color) }
