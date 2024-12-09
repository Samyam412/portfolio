/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: "es5",
    printWidth: 100,
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ['clsx', 'cn'], // if you use utility functions like clsx
};

export default config;
