module.exports = {
    ...require('config/eslint-react.js'),
    //	parserOptions: {
    //		root: true,
    //		tsconfigRootDir: __dirname,
    //		project: ['./tsconfig.json'], // Specify it only for TypeScript files
    //	},
    settings: {
        react: {
            version: 'latest',
        },
    },
};
