module.exports = {
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',

  plugins: [
    require('prettier-plugin-astro'),
    require('@trivago/prettier-plugin-sort-imports'),
  ],

  overrides: [
    
  ],

  // https://github.com/trivago/prettier-plugin-sort-imports
  importOrder: [
    // External
    '<THIRD_PARTY_MODULES>',
    // Internal
    '^@/',
    // Sibling
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
