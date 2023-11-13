module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    useTabs: false,
    endOfLine: 'lf',
    plugins: ['@trivago/prettier-plugin-sort-imports'],

    importOrder: ['^components/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
