module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true
	},
	globals: {
		wp: true,
		wpApiSettings: true,
		wcSettings: true,
		es6: true
	},
	rules: {
		camelcase: 0,
		indent: 0,
		'no-alert': 0,
		'prefer-const': 0,
		'no-unused-vars': 0,
		'no-unused-expressions': 0,
		'max-len': [ 2, { 'code': 140 } ],
		'no-console': 1,
	},
	extends: [ "plugin:@wordpress/eslint-plugin/recommended" ],
};