const processTokens = require('../../utils/processTokens')

const color = {
  primary: {
    background: `$foun-color-neutral-gray`,
    // trueHeading: ``, Uncomment and use to override suggestions
    // trueText: `$foun-color-core-true-red`,
    container: {
      background: `$foun-color-brand-medallion-20`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  secondary: {
    background: `$foun-color-brand-true-tulanegreen`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$foun-color-brand-neutral-limestone-60`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  tertiary: {
    background: `$foun-color-brand-accent-verdigris-20`,
    // trueHeading: ``,
    // trueText: ``,
    container: {
      background: `$foun-color-brand-olivebranch-20`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
}

processTokens.generateColorSuggestions(color)

module.exports = { contColor: processTokens.generateTokens(color) }
