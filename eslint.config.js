import { ourongxing } from "@ourongxing/eslint-config"

export default ourongxing({
  astro: true,
  react: true,
  ignores: [],
  rules: {
    "node/prefer-global/process": "off",
    "astro/no-unresolved": "off",
    "style/no-tabs": "off",
    "no-unused-vars": "off",
    "unused-imports/no-unused-vars": "off",
    "style/jsx-tag-spacing": "off",
    "style/multiline-ternary": "off",
    "style/indent": "off",
  },
})
