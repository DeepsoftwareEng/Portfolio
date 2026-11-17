const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    ignores: ['.claude/**', 'node_modules/**', 'test-results/**', 'playwright-report/**', '.lighthouseci/**'],
  },
  js.configs.recommended,
  {
    // Mã chạy trên trình duyệt: script thường (không module), mọi thứ gắn vào window.PW.
    files: ['assets/js/**/*.js', 'data/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
      globals: { ...globals.browser },
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-implicit-globals': 'error',
      'no-unused-vars': ['error', { args: 'after-used', caughtErrors: 'none' }],
    },
  },
  {
    files: ['*.js', 'tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      // tests/e2e chạy callback page.evaluate() trong trình duyệt
      globals: { ...globals.node, ...globals.browser },
    },
  },
];
