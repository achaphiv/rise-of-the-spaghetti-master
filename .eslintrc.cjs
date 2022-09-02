module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  // https://eslint.org/docs/user-guide/configuring/plugins#naming-convention
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // sloppy code
    'no-console': 'warn',
    'no-lonely-if': 'warn',

    // unused code
    'no-empty': 'warn',
    'require-await': 'warn',

    // style
    'curly': 'warn',
    'lines-between-class-members': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',

    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        // Disable to allow `typeof import('@/components/ui/BaseH5.vue')['default']`
        disallowTypeAnnotations: false,
      },
    ],

    'prettier/prettier': 'warn',

    'import/extensions': [
      'warn',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
  },

  overrides: [
    {
      files: ['*.astro'],

      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      extends: ['plugin:astro/recommended'],
    },
  ],
}
