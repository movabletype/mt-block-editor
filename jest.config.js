module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "(\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss)|\\?raw)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(react-dnd|react-dnd-html5-backend|react-dnd-touch-backend|dnd-core|@react-dnd)/)",
  ],
  testPathIgnorePatterns: [
    "/sub-projects/generator-mt-block-editor-block/",
    "/.vscode/",
    "/__tests__/helper.ts",
  ],
  setupFiles: [
    "<rootDir>/__mocks__/matchMediaMock.ts",
    "<rootDir>/__mocks__/permissionsMock.ts",
  ],
};
