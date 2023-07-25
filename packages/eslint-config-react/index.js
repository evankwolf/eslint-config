const { isPackageExists } = require('local-pkg')

const IS_TS = isPackageExists('typescript')
const IS_USING_MONOREPO = isPackageExists('@evanryuu/eslint-config')

const typeExtends = [
  IS_TS ? '@evanryuu/eslint-config-ts' : '@evanryuu/eslint-config-basic',
]

if (!IS_TS)
  console.warn('[@evanryuu/eslint-config-react] TypeScript is not installed, fallback to JS only.')

if (IS_USING_MONOREPO) typeExtends.unshift()

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:css-import-order/recommended',
    ...typeExtends,
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      node: {},
    },
    'polyfills': ['Promise', 'URL'],
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    'css-import-order',
  ],
  rules: {
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-wrap-multilines': ['error', {
      declaration: false,
      assignment: false,
    }],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-bind': 0,
    // Should not check test file
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    // Checks rules of Hooks
    'react/function-component-definition': 0,
    'react/no-unused-class-component-methods': 0,
    'react/no-array-index-key': 0,
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    // import rules
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [0],
    'import/prefer-default-export': 1,
    'import/order': ['error', {
      'groups': [
        'builtin',
        'external',
        'internal',
        'sibling',
        'index',
        'object',
        'unknown',
        'type',
      ],
      'pathGroups': [{
        pattern: 'react',
        group: 'external',
        position: 'before',
      }, {
        pattern: '*.css',
        group: 'type',
        position: 'after',
      }],
      'pathGroupsExcludedImportTypes': ['react'],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
  },
  globals: {
    gtag: true,
  },
}
