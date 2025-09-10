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
      ...tsEslint.configs.strictTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
      ...angularEslint.configs.tsAll,
      perfectionistPlugin.configs['recommended-natural'],
      unicornPlugin.default.configs.all,
      sonarjsPlugin.configs.recommended,
    ],
    processor: angularEslint.processInlineTemplates,
    rules: {
      'brace-style': ['error', 'allman', { allowSingleLine: true }],
      '@typescript-eslint/naming-convention': [
        'error',
        // Clases, interfaces, tipos, enums → PascalCase
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // Interfaces → prefijo I
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
        // Type parameters → T-prefixed
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: {
            regex: '^T[A-Z][A-Za-z0-9]*$',
            match: true,
          },
        },
        // Enum members → UPPER_CASE
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        // Variables, funciones, parámetros públicos → camelCase
        {
          selector: 'variableLike',
          format: ['camelCase'],
        },
        // Constantes primitivas → UPPER_CASE
        {
          selector: 'variable',
          modifiers: ['const'],
          types: ['string', 'number', 'boolean'],
          format: ['UPPER_CASE'],
        },
        // Propiedades privadas → _camelCase
        {
          selector: 'property',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        // Propiedades públicas → camelCase
        {
          selector: 'property',
          modifiers: ['public'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
        },
        // Métodos privados → _camelCase
        {
          selector: 'method',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        // Métodos públicos → camelCase
        {
          selector: 'method',
          modifiers: ['public'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'unsorted',
          useConfigurationIf: {
            callingFunctionNamePattern: [
              '^Component$',
              '^Directive$',
              '^Injectable$',
              '^Pipe$',
              '^NgModule$',
            ],
          },
        },
      ],
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
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
