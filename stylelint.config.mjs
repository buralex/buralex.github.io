// @ts-check

/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {},
  overrides: [
    {
      files: '**/*.module.{css,scss}',
      rules: {
        'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$',
      },
    },
  ],
  ignoreFiles: ['**/node_modules/**', '**/out/**', '**/build/**'],
};

export default stylelintConfig;
