/** @type {import('jest').Config} */
const config = {
  preset: "jest-expo",

  /**
   * Aliases
   */
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  }
}

module.exports = config
