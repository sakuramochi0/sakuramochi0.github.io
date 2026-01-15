/**
 * @see https://prettier.io/docs/en/configuration.html
 */
import type { Config } from 'prettier'

const config: Config = {
  trailingComma: 'es5',
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 70,
        useTabs: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        proseWrap: 'never',
      },
    },
    {
      files: '*.{json,babelrc,eslintrc,remarkrc,prettierrc}',
      options: {
        useTabs: false,
      },
    },
  ],
}

export default config
