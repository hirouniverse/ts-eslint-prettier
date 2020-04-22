module.exports = {
    "parserOptions": {
        "ecmaVersion": 2018, // 3, 5(default), 6(2015),7(2016),8(2017),9(2018),10(2019),11(2020)
        "sourceType": "module" // script(default) or module
    },
    // Specifies the ESLint parser
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        // Uses the recommended rules
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended"
    ],
    "ignorePatterns": [
        "node_modules/"
    ],
    "overrides": [
        {
            "files": ["src/**/*.{js,ts}"],            
            // https://eslint.org/docs/user-guide/configuring#using-configuration-files
            "rules": {
                "eqeqeq": "off",
                "semi": ["error", "always"],
                "quotes": ["warn", "single", { "allowTemplateLiterals": true }],
                "indent": ["error", 2],
                "comma-dangle": "off"
            },
        }
    ],
    "noInlineConfig": true,
    // "reportUnusedDisableDirectives": true,
    // "root": true
};
