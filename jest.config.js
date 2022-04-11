module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "(\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss)|\\?raw)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>/sub-projects/generator-mt-block-editor-block/",
    "<rootDir>/.vscode/",
  ],
};
