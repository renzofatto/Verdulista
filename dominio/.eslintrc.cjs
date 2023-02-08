module.exports = {
  "env": {
    "es2021": true,
    "node": true,
  },
  "extends": [
    "google",
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "rules": {

    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "eol-last": ["error", "never"],
    "require-jsdoc": "off",
  },
};