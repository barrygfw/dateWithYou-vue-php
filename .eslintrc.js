'use strict';
const OFF = 0;
const ERROR = 2;
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/standard'], // , '@vue/prettier'
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'no-tabs': OFF,
		'accessor-pairs': OFF,
		'brace-style': [ERROR, '1tbs'],
		'consistent-return': OFF,
		'dot-location': [ERROR, 'property'],
		'dot-notation': ERROR,
		'eol-last': ERROR,
		eqeqeq: [ERROR, 'allow-null'],
		semi: [ERROR, 'always'],
		indent: OFF, // tab 缩进[ERROR, 'tab']
		// 'vue/script-indent': ['error', 4, { baseIndent: 1 }],
		'jsx-quotes': [ERROR, 'prefer-double'],
		'keyword-spacing': [ERROR, { after: true, before: true }],
		'no-bitwise': OFF,
		'no-inner-declarations': [ERROR, 'functions'],
		'no-multi-spaces': ERROR,
		'no-restricted-syntax': [ERROR, 'WithStatement'],
		'no-shadow': ERROR,
		'no-unused-expressions': ERROR,
		'no-unused-vars': [ERROR, { args: 'none' }],
		'no-use-before-define': [ERROR, { functions: false, variables: false }],
		'no-useless-concat': OFF,
		quotes: [
			ERROR,
			'single',
			{ avoidEscape: true, allowTemplateLiterals: true },
		],
		'space-before-blocks': ERROR,
		'space-before-function-paren': OFF,
		'valid-typeof': [ERROR, { requireStringLiterals: true }],
		'no-var': ERROR,
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
			},
		},
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
};
