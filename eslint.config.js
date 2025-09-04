// @ts-check
const perfectionistPlugin = require('eslint-plugin-perfectionist');
const unicornPlugin = require('eslint-plugin-unicorn');
const sonarjsPlugin = require('eslint-plugin-sonarjs');

const typescriptParser = require('@typescript-eslint/parser');
const eslint = require('@eslint/js');
const angularEslint = require('angular-eslint');
const tsEslint = require('typescript-eslint');
module.exports = tsEslint.config(
  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
      },
    },
    plugins: {},
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
      ...angularEslint.configs.tsRecommended,
      perfectionistPlugin.configs['recommended-natural'],
      unicornPlugin.default.configs.recommended,
      sonarjsPlugin.configs.recommended,
    ],
    processor: angularEslint.processInlineTemplates,
    rules: {
      'brace-style': ['error', 'allman', { allowSingleLine: true }],
      '@typescript-eslint/naming-convention': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      '@angular-eslint/directive-selector': 'error',
      '@angular-eslint/component-selector': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angularEslint.configs.templateRecommended,
      ...angularEslint.configs.templateAccessibility,
    ],
    rules: {},
  },
);
