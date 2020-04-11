module.exports = function (api) {
  var validEnv = ["development", "test", "production"];
  var currentEnv = api.env();
  var isDevelopmentEnv = api.env("development");
  var isProductionEnv = api.env("production");
  var isTestEnv = api.env("test");

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      "Please specify a valid `NODE_ENV` or " +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        "."
    );
  }

  return {
    presets: [
      isTestEnv && [
        require("@babel/preset-env").default,
        {
          targets: {
            node: "current",
          },
        },
      ],
      (isProductionEnv || isDevelopmentEnv) && [
        require("@babel/preset-env").default,
        {
          forceAllTransforms: true,
          useBuiltIns: "usage",
          modules: false,
          exclude: ["transform-typeof-symbol"],
          corejs: {
            version: 3,
            proposals: true,
          },
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ].filter(Boolean),
    plugins: [
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
    ],
  };
};
