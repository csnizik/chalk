const processTokens = require('../processTokens')

function generateColorSuggestions(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      generateColorSuggestions(obj[key])
    } else if (key === 'background') {
      const contrast = processTokens.generateColorContrasts(obj[key])
      obj.contrast = contrast
    }
  }
}

module.exports = generateColorSuggestions
