import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
  {
    ignores: ["lib/", "node_modules/"],
  },
  ...compat.extends("airbnb-base", "plugin:prettier/recommended"),
  {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        parser: tsParser,
        ecmaVersion: 2018,
        sourceType: "module",
    },

    settings: {
        "import/resolver": {
            typescript: {},
        },
    },

    rules: {
        "no-plusplus": "off",
        "prettier/prettier": "error",
        "import/prefer-default-export": "off",

        "import/extensions": ["error", "ignorePackages", {
            ts: "never",
        }],
    },
  }
];
