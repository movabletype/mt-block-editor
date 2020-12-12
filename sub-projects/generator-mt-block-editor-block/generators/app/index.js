"use strict";
const path = require("path");
const mkdirp = require('mkdirp');
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the peachy ${chalk.red(
          "generator-mt-block-editor-block"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "input",
        name: "blockName",
        message: "Your block name",
        default: this.appname.replace(/mt-block-editor-block-/, ""),
      },
    ];

    return this.prompt(prompts).then(props => {
      props.blockName = props.blockName.replace(/^[a-z]/g, c =>
        c.toUpperCase()
      );
      this.props = props;
    });
  }

  default() {
    const defaultFolder = `mt-block-editor-block-${this.props.blockName.toLowerCase()}`;
    const destinationBasename = path
      .basename(this.destinationPath())
      .toLowerCase();
    if (
      destinationBasename !== defaultFolder &&
      destinationBasename !== this.props.blockName.toLowerCase()
    ) {
      this.log(`I'll create a folder ${defaultFolder}.`);
      mkdirp(defaultFolder);
      this.destinationRoot(this.destinationPath(defaultFolder));
      this.appname = defaultFolder;
    }
  }

  writing() {
    const files = [
      "dot.eslintrc.js",
      "dot.gitignore",
      "i18next-parser.config.js",
      "LICENSE",
      "Makefile",
      "webpack.config.js",
      "docs/index.html",
      "README.md",
      "babel.config.js",
      "package-lock.json",
      "package.json",
      "tsconfig.json",
      "postcss.config.js",
      "src/@types/custom.d.ts",
      "src/locales/ja",
      "src/locales/ja/translation.json",
      "src/locales/en",
      "src/locales/en/translation.json",
      "src/css/__blockName__.scss",
      "src/i18n.ts",
      "src/img/icon/__blockName__.svg",
      "src/index.ts",
      "src/Block/__blockName__.tsx",
    ];

    files.forEach(f => {
      const dest = f
        .replace(/__blockName__/, this.props.blockName)
        .replace(/\bdot\./, ".");
      this.fs.copyTpl(
        this.templatePath(f),
        this.destinationPath(f.replace(/__blockName__/, this.props.blockName)),
        Object.assign(
          {
            appname: this.appname,
            author: "Taku Amano",
            email: "tamano@sixapart.com",
            vendorId: "tamano",
          },
          this.props
        )
      );
    });
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
};
