module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    settings: {
        next: {
            rootDir: ['apps/*/', 'packages/*/'],
        },
    },
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
};
