const processTokens = require('../processTokens')

function generateColorSuggestions(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      generateColorSuggestions(obj[key])
    } else if (key === 'background') {
      const contrast = processTokens.generateContrasts(obj[key])
      obj.contrast = contrast
      // if (
      //   (obj.trueHeading && obj.trueHeading === '') ||
      //   (obj.truText && obj.trueText === '')
      // ) {
      //   console.log('fuckup')
      //   try {
      //     throw new Error(
      //       'trueHeading or trueText is empty. Please provide a value.'
      //     )
      //   } catch (err) {
      //     console.error(err.message)
      //     return
      //   }
      // }

      // if (!obj.trueHeading) {
      //   const contrastHeading = processTokens.generateContrasts(obj[key])
      //   obj.heading = contrastHeading
      // } else {
      //   obj.heading = obj.trueHeading
      // }

      // if (!obj.trueText) {
      //   const contrastText = processTokens.generateContrasts(obj[key])
      //   obj.text = contrastText
      // } else {
      //   obj.text = obj.trueText
      // }
    }
  }
}

module.exports = generateColorSuggestions
