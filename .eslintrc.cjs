const { resolve } = require("path")

const project = resolve(__dirname, "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    "plugin:tailwindcss/recommended"
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project
  },
  overrides: [
    /**
     * Disable type checking for JavaScript files
     */
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"]
    },
    /**
     * Config files (ex: prettier.config.js, tailwind.config.js)
     */
    {
      files: ["*.config.{js,ts}"],
      env: {
        node: true
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-default-export": "off",
        "func-names": "off"
      }
    },
    /**
     * Test Configuration
     */
    {
      files: ["**/__tests__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"],
      extends: [require.resolve("@vercel/style-guide/eslint/vitest")],
      rules: {
        /**
         * Allow non-null assertions in tests
         */
        "@typescript-eslint/no-non-null-assertion": "off",
        "eslint-comments/require-description": "off"
      }
    },
    /**
     * JSX/TSX specific config
     */
    {
      files: ["**/*.{jsx,tsx}"],
      rules: {
        "no-nested-ternary": "off"
      }
    },
    /**
     * Expo Routerconfiguration / exports
     */
    {
      files: ["app/**/*.tsx"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": ["error", { target: "any" }]
      }
    },
    /**
     * react-navigation ovverides
     */
    {
      files: ["app/**/_layout.tsx"],
      rules: {
        "react/no-unstable-nested-components": "off"
      }
    }
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project
      }
    },
    tailwindcss: {
      callees: ["className", "clsx", "cls", "cva", "cn"]
    }
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        varsIgnorePattern: "^_"
      }
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          "internal",
          ["sibling", "parent"],
          "index",
          "object",
          "type"
        ],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true
      }
    ],
    "tailwindcss/no-custom-classname": [
      "error",
      {
        cssFiles: ["assets/globals.css"]
      }
    ]
  }
}
