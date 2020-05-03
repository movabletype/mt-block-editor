module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-nested"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
  ],
};
