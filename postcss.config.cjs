module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-mixins"),
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
