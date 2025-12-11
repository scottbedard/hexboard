import js from '@eslint/js'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
    rules: {
      'vue/attributes-order': ['error', {
        alphabetical: true,
        order: [
          [
            'CONTENT',
            'TWO_WAY_BINDING',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'SLOT',
          ],
          'ATTR_STATIC',
          'ATTR_DYNAMIC',
          'EVENTS',
        ],
      }],
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['dist/', 'dist-sandbox/', 'node_modules/'],
  },
)

