import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist',
      '**/coverage/**',
      '**/public/**',
      '**/node_modules/**'],
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    ignores: ['**/server.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      // Enforce strict equality (avoid type coercion issues)
      'eqeqeq': ['error', 'always'],
      // Prevent unused variables (avoids clutter and potential mistakes)
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      // Enforce `const` over `let` when variables are not reassigned
      'prefer-const': ['error', { 'ignoreReadBeforeAssign': true }],
      // Prevent accidental reassignment of function parameters
      'no-param-reassign': ['error'],
      // Disallow the use of `console` (use logging utilities in production)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Enforce consistent indentation (2 spaces for better readability)
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      // Enforce semicolons at the end of statements
      'semi': ['error', 'always'],
      // Prevent using `var` (use `let` or `const` instead)
      'no-var': 'error',
      // Disallow unnecessary template literals
      'no-useless-concat': 'error',
      // Prevent unused imports
      'no-duplicate-imports': 'error',
      // Disallow multiple empty lines
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      // Enforce consistent spacing inside braces
      'object-curly-spacing': ['error', 'always'],
      // Ensure consistent use of arrow functions where possible
      'prefer-arrow-callback': 'error',
      // Ensure consistent spacing before function parentheses
      'space-before-function-paren': ['error', 'always'],
      // Disallow unnecessary escape characters
      'no-useless-escape': 'error',
      // Enforce single quotes except for template literals
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      // Require explicit return types in TypeScript functions
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
