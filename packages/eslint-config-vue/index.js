const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')

if (!TS)
  console.warn('[@evanryuu/eslint-config] TypeScript is not installed, fallback to JS only.')

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        ...(TS
          ? { '@typescript-eslint/no-unused-vars': 'off' }
          : null),
      },
    },
  ],
  plugins: ['css-import-order'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:css-import-order/recommended',
    TS
      ? '@evanryuu/eslint-config-ts'
      : '@evanryuu/eslint-config-basic',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '*.css',
            group: 'type',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
