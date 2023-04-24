const processTokens = require('../../utils/processTokens')

const color = {
  primary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    heading: `$fr-color-brand-true-tulanegreen`,
    text: `$fr-color-brand-black`,
    container: {
      background: `$fr-color-brand-olivebranch`,
      heading: `$fr-color-brand-true-tulaneblue`,
      text: `$fr-color-brand-white`,
    },
  },
  secondary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    heading: `$fr-color-brand-true-tulanegreen`,
    text: `$fr-color-brand-black`,
    container: {
      background: `$fr-color-brand-olivebranch`,
      heading: `$fr-color-brand-true-tulaneblue`,
      text: `$fr-color-brand-white`,
    },
  },
  tertiary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    heading: `$fr-color-brand-true-tulanegreen`,
    text: `$fr-color-brand-black`,
    container: {
      background: `$fr-color-brand-olivebranch`,
      heading: `$fr-color-brand-true-tulaneblue`,
      text: `$fr-color-brand-white`,
    },
  },
}

console.log(
  'checking...',
  processTokens.generateContrasts(color.primary.background)
)

module.exports = { coColor: processTokens.generateTokens(color) }
// todo write a util func that takes the given background color and the base heading/text color and runs tinycolor's readability checkers to determine which shade of that color is good contrast, better contrast, and best contrast
