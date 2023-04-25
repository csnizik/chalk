const processTokens = require('../../utils/processTokens')

const color = {
  primary: {
    background: `$fr-color-neutral-gray`,
    // trueHeading: ``, Uncomment and use to override suggestions
    // trueText: `$fr-color-core-true-red`,
    container: {
      background: `$fr-color-brand-medallion-20`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  secondary: {
    background: `$fr-color-brand-true-tulanegreen`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$fr-color-brand-neutral-limestone-60`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  tertiary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$fr-color-brand-olivebranch-20`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
}

processTokens.generateColorSuggestions(color)

module.exports = { coColor: processTokens.generateTokens(color) }
