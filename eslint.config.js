import auto from 'eslint-config-canonical/configurations/auto.js';
import module from 'eslint-config-canonical/configurations/module.js';
import ts from 'eslint-config-canonical/configurations/typescript-type-checking.js';

export default [
  ...auto,
  module.recommended,
  {
    ...ts.recommended,
    files: ['*.ts', '*.tsx'],
  },
  {
    rules: {
      '@typescript-eslint/no-throw-literal': 'off',
      'import/extensions': 'off',
    },
  },
  {
    ignores: [
      'package-lock.json',
      'dist/',
      'config/',
      '.github/',
      'vite.config.ts',
      'tsconfig.json',
      'tsconfig.node.json',
    ],
  },
];
