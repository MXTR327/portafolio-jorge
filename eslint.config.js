// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const perfectionist = require("eslint-plugin-perfectionist");
const unicorn = require("eslint-plugin-unicorn");
const sonarjs = require("eslint-plugin-sonarjs");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {},
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      perfectionist.configs["recommended-natural"],
      unicorn.default.configs.recommended,
      sonarjs.configs.recommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "brace-style": ["error", "allman", { "allowSingleLine": true }],
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
