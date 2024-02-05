/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  printWidth: 99,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: 'tailwind.config.js',
  tailwindFunctions: ['getFinalClassName']
}
