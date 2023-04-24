function generateTokens(tokens) {
  const result = {}

  const processSubTokens = (prefix, subTokens) => {
    for (const [key, value] of Object.entries(subTokens)) {
      if (typeof value === 'object') {
        processSubTokens(`${prefix}-${key}`, value)
      } else {
        const tokenName = `$${prefix}-${key}`
        result[tokenName] = { value }
      }
    }
  }

  for (const [category, subTokens] of Object.entries(tokens)) {
    if (typeof subTokens === 'object') {
      processSubTokens(category, subTokens)
    } else {
      const tokenName = `$${category}`
      result[tokenName] = { value: subTokens }
    }
  }

  return result
}

module.exports = generateTokens
