const fs = require("fs");
const yaml = require("js-yaml");
const archiver = require("archiver");

const config = yaml.load(
  fs.readFileSync("plugins/<%= blockName %>/config.yaml", "utf8")
);

const output = fs.createWriteStream(`<%= blockName %>-${config.version}.zip`);
const archive = archiver("zip");

archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    console.log(err);
  } else {
    throw err;
  }
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

["README.md", "LICENSE"].forEach((f) => {
  archive.file(f, { name: f });
});
["mt-static/plugins/<%= blockName %>/dist/", "plugins/"].forEach((d) => {
  archive.directory(d, d);
});

archive.finalize();
