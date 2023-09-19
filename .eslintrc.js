/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["src/resources/**/*"],
      rules: {
        "@typescript-eslint/no-explicit-any": ["off"],
        "no-irregular-whitespace": ["off"],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  ignorePatterns: ["build", "node_modules", ".husky", ".yarn"],
};
