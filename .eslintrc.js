module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
  rules: {
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        // interface should not start with "I" (e.g ISomething)
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-field',
          'protected-field',
          'private-field',

          'public-method',
          'protected-method',
          'private-method',
        ],
      },
    ],
    camelcase: ['error'],
    'sort-imports': 'off',
    'import/order': 'off',
    'newline-after-var': 'error',
  },
  
};
