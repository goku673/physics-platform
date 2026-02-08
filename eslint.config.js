import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // 1. IGNORAR ARCHIVOS (Debe ir primero)
  {
    ignores: [
      'dist/',
      'build/',
      'node_modules/',
      '.next/',
      'commitlint.config.js',
      'eslint.config.js',
    ],
  },
  // 2. CONFIGURACIÓN BASE
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off',
    },
  },
]
