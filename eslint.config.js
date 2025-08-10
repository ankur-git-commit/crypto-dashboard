import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { globalIgnores } from "eslint/config"

export default tseslint.config([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            // Turn off TypeScript unused variables warning
            "@typescript-eslint/no-unused-vars": "off",
            
            // Turn off the base ESLint rule to avoid conflicts
            "no-unused-vars": "off",
            
            // Turn off other common warnings
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/prefer-const": "off",
            "prefer-const": "off",
            "no-console": "off",
        },
    },
])