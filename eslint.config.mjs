import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  markdown: false,
  rules: {
    'no-console': 'error',
  },
})
