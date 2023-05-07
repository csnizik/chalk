;(function (Drupal, styleDictionary) {
  Drupal.behaviors.styleDictionaryIntegration = {
    attach: function (context, settings) {
      console.log('context', context)
      // Your custom JS code to integrate with style-dictionary.
      // You can use the 'styleDictionary' object to call the library functions,
      // and interact with the form elements using Drupal's behavior system.

      // Example: register a custom format
      styleDictionary.registerFormat({
        name: 'custom_format',
        formatter: function (dictionary, config) {
          // Your custom format implementation.
        },
      })

      // Example: build the style dictionary using a custom configuration.
      styleDictionary
        .extend({
          source: [
            /* your token sources */
          ],
          platforms: {
            custom: {
              transformGroup: 'js',
              buildPath: 'build/',
              files: [
                {
                  destination: 'tokens.js',
                  format: 'custom_format',
                },
              ],
            },
          },
        })
        .buildAllPlatforms()
    },
  }
})(Drupal, styleDictionary)
