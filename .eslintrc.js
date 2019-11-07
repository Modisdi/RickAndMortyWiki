module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended',  ],
  parser: 'babel-eslint',
  env: {
      "jest": true
  },
  parserOptions: {
    ecmaVersion: 7,
      sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    "react/state-in-constructor": 0,
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    'react/forbid-prop-types': 0,
    'import/prefer-default-export': 0,
    'react/jsx-key': 2,
    'no-nested-ternary': 'off',
    'react/no-unused-prop-types': 2,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'class-methods-use-this': ['error', { 'exceptMethods': ['render', 'componentDidMount'] }],
    'func-names': [1, 'as-needed'],
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'max-len': [
      'error',
      120,
      2
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'semi': [
      'error',
      'never'
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'arrow-parens': [
      "error",
      "as-needed"
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single',
      {'avoidEscape': true}
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {'maximum': 1, 'when': 'multiline'}
    ],
    'react/jsx-tag-spacing': [
      'error',
      {'beforeSelfClosing': 'always'}
    ],
    'react/jsx-filename-extension': [
      'error',
      {'extensions': ['.jsx', '.js']}
    ],
    'react/no-array-index-key': [
      0
    ],
    'react/require-default-props': [
      0,
      { forbidDefaultForRequired: false }
    ]
  },
  plugins: ['react', 'import','jsx-a11y']
};
