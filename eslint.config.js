export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      node: true,    // Recognize Node.js global variables
      mocha: true,   // Recognize Mocha global variables
    },
    rules: {
      // Possible Errors
      "no-debugger": "error",
      "no-extra-semi": "error",
      "no-irregular-whitespace": "error",
      "no-unsafe-negation": "error",

      "curly": "error",
      "eqeqeq": "error",
      "no-eval": "error",
      "no-implicit-globals": "error",
      "no-multi-spaces": "error",
      "no-new": "error",
      "no-unused-expressions": "error",

      // Variables
      "no-undef": "error",
      "no-unused-vars": "error",
      "no-use-before-define": "error",
    },
  },
];
