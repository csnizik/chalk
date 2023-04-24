const processTokens = require('../../utils/processTokens')

const color = {
  primary: {
    background: `$fr-color-brand-accent-verdigris-20`,
    // trueHeading: ``, Uncomment and use to override suggestions
    // trueText: `$fr-color-core-true-red`,
    container: {
      background: `$fr-color-brand-accent-verdigris-10`,
      // trueHeading: ``,
      // trueText: ``,
    },
  },
  secondary: {
    background: `$fr-color-brand-true-tulanegreen`,
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

function updateColorContrasts(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      updateColorContrasts(obj[key])
    } else if (key === 'background') {
      if (obj.trueHeading === '' || obj.trueText === '') {
        try {
          throw new Error(
            'trueHeading or trueText is empty. Please provide a value.'
          )
        } catch (err) {
          console.error(err.message)
          return
        }
      }

      if (!obj.trueHeading) {
        const contrastHeading = processTokens.generateContrasts(obj[key])
        obj.heading = contrastHeading
      } else {
        obj.heading = obj.trueHeading
      }

      if (!obj.trueText) {
        const contrastText = processTokens.generateContrasts(obj[key])
        obj.text = contrastText
      } else {
        obj.text = obj.trueText
      }
    }
  }
}

processTokens.generateColorSuggestions(color)

module.exports = { coColor: processTokens.generateTokens(color) }
