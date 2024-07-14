module.exports = {
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: '**/*.module.{css,scss}',
      rules: {
        // https://issueexplorer.com/issue/stylelint/stylelint/5655
        // https://stylelint.io/user-guide/rules/regex/
        'value-keyword-case': null,
        'value-no-vendor-prefix': null,
        'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
      },
    },
  ],
};
