module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  //  parserOptions: {
  //    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
  //    sourceType: "module", // Allows for the use of imports
  //    ecmaFeatures: {
  //      jsx: true // Allows for the parsing of JSX
  //    }
  //  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
