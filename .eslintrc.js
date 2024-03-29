module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    "extends": ["airbnb","prettier"],
    "plugins": [
        "prettier",
        "import",
        "react",
        "react-hooks"
    ],
    "rules": {
        "arrow-parens": 0,
        "arrow-body-style": 0,

        "import/no-extraneous-dependencies" : "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "import/no-named-as-default": "off",
        "import/no-mutable-exports": "off",

        "no-undef": "off",
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-cond-assign": "error",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-param-reassign": 0,
        "no-underscore-dangle": 0,
        "no-magic-numbers": ["error", { "ignoreArrayIndexes": true, "ignore": [-1, 0, 1] }],
        "no-implicit-coercion": "error",
        "no-return-assign": "error",
        "no-self-compare": "error",
        "no-async-promise-executor": "error",

        "eol-last": 0,

        "implicit-arrow-linebreak": 0,
        "object-curly-spacing": 0,
        "object-curly-newline":0,
        "operator-linebreak": 0,
        "prop-types": 0,

        "class-methods-use-this": 0,
        "consistent-return": 0,
        "camelcase": 0,

        "func-names": 0,

        "require-await": "error",

        "react/prop-types": 0,
        "react/forbid-prop-types": 0,
        "react/no-array-index-key": 0,
        "react/destructuring-assignment": 0,
        "react/button-has-type": 0,

        "react-hooks/rules-of-hooks": "error",

        "jsx-a11y/img-redundant-alt" : "off",
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-associated-control": 0,

        // code formatting options
        "linebreak-style": 0,
        "jsx-quotes": 0,
        "quotes": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-trailing-spaces": 1,
        "react/jsx-wrap-multilines": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-no-bind": [2, { "ignoreRefs": true, "allowArrowFunctions": true, "allowFunctions": false, "allowBind": false }],
        "react/jsx-boolean-value": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": 0,
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "all",
                "tabWidth": 4,
                "semi": true,
                "singleQuote": true,
                "bracketSpacing": false,
                "printWidth": 120
            }
        ]
    }
}