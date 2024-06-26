module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.app.json'],
    },
    plugins: ['react-refresh', 'prettier', 'react'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'import/prefer-default-export': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'no-bitwise': 'off',
        'react/require-default-props': 'off',
        'react/display-name': 'off',
    },
}
