module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb-base',
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
		'no-use-before-define': 'warn',
		'no-tabs': 0,
		'no-console': 'warn',
		'no-param-reassign': 0,
		indent: ['error', 'tab'],
		semi: ['error', 'never'],
		'arrow-parens': ['error', 'never'],
	},
}
