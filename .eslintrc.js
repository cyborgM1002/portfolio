module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "vue"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/vue",
  ],
  rules: {
    indent: ["warn", "tab"],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
  },
};
