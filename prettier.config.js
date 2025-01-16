/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "always",
};

export default config;
