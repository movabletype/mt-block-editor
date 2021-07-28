"use strict";
const path = require("path");
const mkdirp = require("mkdirp");
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const blockFiles = [
  "dot.eslintrc.js",
  "dot.gitignore",
  "i18next-parser.config.js",
  "LICENSE",
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
const mtPluginFiles = [
  "mt-plugin/package.json",
  "mt-plugin/README.md",
  "mt-plugin/LICENSE",
  "mt-plugin/plugins/__blockName__/config.yaml",
  "mt-plugin/plugins/__blockName__/tmpl/extension.tmpl",
];

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
        name: "blockName",
        message: "Your block name",
        default: this.appname.replace(/mt-block-editor-block-/, ""),
        filter: (str) => {
          return str.replace(/(^|[ _-]+)([a-z])/g, (all, prefix, c) =>
            c.toUpperCase()
          );
        },
      },
      {
        name: "author",
        message: "Author",
        default: () => {
          try {
            return `${this.user.git.name()} <${this.user.git.email()}>`;
          } catch (e) {
            return "";
          }
        },
      },
      {
        name: "vendorId",
        message:
          "Vendor ID (e.g. Organization name, store name or github accout name)",
        default: (props) => {
          return props.author
            .replace(/\s+$|\s+<.*/, "")
            .replace(/(\s|[_-])+/g, "_")
            .toLowerCase();
        },
        validate: (str) => {
          if (/^[a-zA-Z_]+$/.test(str)) {
            return true;
          }
          return "Only alphabets and underscores can be used.";
        },
      },
      {
        name: "projectType",
        message: "Project type",
        type: "list",
        choices: ["Block with Movable Type Plugin", "Block only"],
      },
    ];

    return this.prompt(prompts).then((props) => {
      props.isPlugin = props.projectType === "Block with Movable Type Plugin";
      props.scriptPackagename = `mt-block-editor-block-${props.blockName}`;
      props.scriptBasename = props.scriptPackagename.toLowerCase();
      this.props = props;
    });
  }

  default() {
    const defaultFolder = this.props.isPlugin
      ? `mt-plugin-mtbe-${this.props.blockName}`
      : this.props.scriptPackagename;
    const destinationBasename = path
      .basename(this.destinationPath())
      .toLowerCase();
    if (
      destinationBasename !== defaultFolder &&
      destinationBasename.toLowerCase() !== this.props.blockName.toLowerCase()
    ) {
      this.log(`I'll create a folder ${defaultFolder}.`);
      mkdirp(defaultFolder);
      this.destinationRoot(this.destinationPath(defaultFolder));
      this.appname = defaultFolder;
    }
  }

  writing() {
    const fileMap = [];
    if (this.props.isPlugin) {
      Array.prototype.push.apply(
        fileMap,
        blockFiles.map((f) => ({
          src: f,
          dst: `mt-static/plugins/${this.props.blockName}/${f}`,
        }))
      );
      Array.prototype.push.apply(
        fileMap,
        mtPluginFiles.map((f) => ({
          src: f,
          dst: f.replace(/^mt-plugin\//, ""),
        }))
      );
    } else {
      Array.prototype.push.apply(
        fileMap,
        blockFiles.map((f) => ({
          src: f,
          dst: f,
        }))
      );
    }

    fileMap.forEach(({ src, dst }) => {
      const dest = dst
        .replace(/__blockName__/, this.props.blockName)
        .replace(/\bdot\./, ".");
      this.fs.copyTpl(
        this.templatePath(src),
        this.destinationPath(dest),
        Object.assign(
          {
            appname: this.appname,
          },
          this.props
        )
      );
    });
  }

  install() {
    if (this.props.isPlugin) {
      this.spawnCommand("npm", ["install"], {
        cwd: `mt-static/plugins/${this.props.blockName}`,
      });
    } else {
      this.installDependencies({
        bower: false,
      });
    }
  }
};
