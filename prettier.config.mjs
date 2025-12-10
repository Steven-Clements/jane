export default {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: ['*.md', '*.yml', '*.yaml'],
            options: { tabWidth: 2 },
        },
    ],
};
