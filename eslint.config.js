import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Astro recommended configuration (includes base parser for .astro files)
  ...eslintPluginAstro.configs.recommended,

  // JSX a11y recommended configuration for accessibility
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],

  // Configure TypeScript parser for script sections within .astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },

  // TypeScript configuration for standalone .ts files
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  // Prettier configuration (must be last to override conflicting rules)
  prettierConfig,
];
