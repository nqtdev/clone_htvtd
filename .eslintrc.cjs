module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-console': 'warn',
    'no-lonely-if': 'warn',
    'no-unused-vars': 'warn',
    'space-before-blocks': ['error', 'always'],
    indent: ['warn', 2],
    semi: ['warn', 'never'],
    quotes: ['error', 'single'],
    'array-bracket-spacing': 'warn',
    'linebreak-style': 'off',
    'keyword-spacing': 'warn',
    'comma-dangle': 'warn',
    'comma-spacing': 'warn',
    'arrow-spacing': 'warn',
    'id-match': [
      'error',
      '^[a-z][a-zA-Z0-9]*$', // Quy tắc camelCase
      {
        properties: true,
        onlyDeclarations: true,
      },
    ],
  },
}
