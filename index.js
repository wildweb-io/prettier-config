module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: false,
	jsxSingleQuote: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	proseWrap: 'always',
	printWidth: 80,
	tabWidth: 2,
	bracketSameLine: false,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	quoteProps: 'preserve',
	requirePragma: false,
	semi: true,
	singleAttributePerLine: false,
	overrides: [
		{files: ['**/*.json', '**/*.yml', '**/*.yaml'], options: {useTabs: false}},
	],
};
