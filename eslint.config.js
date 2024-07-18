// eslint.config.js
export default [
  {
      files: ["**/*.js"],
      env: {
          node: true,       // This makes ESLint recognize Node.js global variables
          mocha: true,      // This makes ESLint recognize Mocha global variables
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
