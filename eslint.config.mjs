import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-undef": "warn"
    },
  },
  {
    // Ignore errors in specific files
    files: ["src/iridium.js", "src/satellite.js", "run.js"],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off"
    }
  }
];