const processTokens = require('../processTokens')

function generateColorSuggestions(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      processTokens.generateContrasts(obj[key])
    } else if (key === 'background') {
      if (obj.trueHeading === '' || obj.trueText === '') {
        try {
          throw new Error(
            'ERROR: You can not leave empty strings in any trueHeading or trueText field. Either enter a token name or remove/comment out the line.'
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

module.exports = generateColorSuggestions
