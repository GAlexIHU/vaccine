module.exports = {
  extends: [
    '@codingsans/eslint-config/typescript-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['unused-imports'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [1, { prefer: 'no-type-imports' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'all', argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  },
  overrides: [
    {
      rules: { '@typescript-eslint/unbound-method': 'off' },
      files: ['**/*.test.ts', '**/*.spec.ts'],
    },
  ],
};
