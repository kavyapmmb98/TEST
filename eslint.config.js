// Import necessary dependencies
import globals from "globals";
import pluginJs from "@eslint/js";

// Define custom globals for Mocha
const mochaGlobals = {
    describe: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly",
    it: "readonly",
    after: "readonly",

};

const combinedConfig = [
    // Maintain existing configuration with additional Mocha globals
    {
        languageOptions: {
            globals: {
                ...globals.browser, 
                ...mochaGlobals,   
            }
        }
    },
    pluginJs.configs.recommended
];

export default combinedConfig;
