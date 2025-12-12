import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...vue.configs['flat/recommended'],
  stylistic.configs.recommended,
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
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/attributes-order': ['error', {
        alphabetical: true,
        order: [
          [
            'CONDITIONALS',
            'CONTENT',
            'LIST_RENDERING',
            'RENDER_MODIFIERS',
            'SLOT',
            'TWO_WAY_BINDING',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
          ],
          [
            'ATTR_SHORTHAND_BOOL',
            'ATTR_STATIC',
            'GLOBAL',
          ],
          [
            'ATTR_DYNAMIC',
            'DEFINITION',
            'UNIQUE',
          ],
          'EVENTS',
        ],
      }],
      'vue/multi-word-component-names': 'off',
      'vue/v-bind-style': ['error', 'shorthand', {
        sameNameShorthand: 'always',
      }],
    },
  },
  {
    files: ['src/lib/components/hexboard/pieces/*.vue'],
    rules: {
      'vue/attributes-order': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: [
      'dist-sandbox/',
      'dist/',
      'node_modules/',
    ],
  },
)
