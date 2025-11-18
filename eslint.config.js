import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  // Astro recommended configuration (includes base parser for .astro files)
  ...eslintPluginAstro.configs.recommended,

  // JSX a11y recommended configuration for accessibility
  jsxA11y.flatConfigs.recommended,

  // Tailwind CSS plugin configuration
  ...tailwind.configs['flat/recommended'],

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
