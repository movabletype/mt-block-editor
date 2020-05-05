MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-oembed",
    className: "oembed",
    label: "oembed",
    html: `<!-- mt-beb --><p>http://</p><!-- /mt-beb -->`,
    canRemoveBlock: false,
    addableBlockTypes: [],
    shouldBeCompiled: true,
    previewHeader: `
<script>
document.addEventListener("DOMContentLoaded", async () => {
  const url = document.querySelector("p").textContent;
  const res = await fetch("https://noembed.com/embed?url=" + url);
  const data = await res.json();
  MTBlockEditorSetCompiledHtml(data.html);
});
</script>
    `,
  })
);

MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-excel",
    className: "excel",
    label: "Table from Excel",
    html: ``,
    canRemoveBlock: false,
    addableBlockTypes: [],
    shouldBeCompiled: true,
    previewHeader: `
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.2/xlsx.full.min.js" integrity="sha256-SOeQ8yqDi+NlDLrc0HMhyEdsXn+Z/TPVSjhAukwBiyU=" crossorigin="anonymous"></script>
<script>
function excelToTable(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });

    workbook.SheetNames.forEach(function (sheetName) {
      var rows = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
        , {header:1}
      );

      var html = "<table>";

      html += "<thead><tr>";
      rows.shift().forEach(function (v) {
        html += "<th>" + v + "</th>";
      });
      html += "</tr></thead>";

      html += "<tbody>";
      rows.forEach(function (row) {
        html += "<tr>";
        row.forEach(function (v) {
          html += "<td>" + v + "</td>";
        });
        html += "</tr>";
      });
      html += "</tbody></table>";

      MTBlockEditorSetCompiledHtml(html);
    });
  };

  reader.onerror = function (e) {
    alert(e);
  };

  reader.readAsBinaryString(file);
}

document.addEventListener("DOMContentLoaded", async () => {
  if (!document.body.dataset.hasCompiledHtml) {
    document.body.textContent = "Please drag and drop an Excel file here.";
    Object.assign(document.body.style, {
      textAlign: "center",
      paddingTop: "40px",
    });
  }

  MTBlockEditorAddDroppable((ev) => {
    const files =
      ev.type === "change" ? ev.target.files : ev.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      excelToTable(files[i]);
    }
  });
});
</script>
    `,
  })
);

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    typeId: "custom-markdown",
    className: "",
    addableBlockTypes: [
      "core-text",
      "mt-image",
      "mt-file",
      "core-html",
      "sixapart-oembed",
      "core-horizontalrule",
      "core-table",
      "core-columns",
      "sixapart-input",
      "sixapart-textarea",
      "sixapart-select",
      "custom-oembed",
      "custom-excel",
      "custom-source",
      "custom-blog_module",
    ],
    html:
      '<!-- mt-beb t="sixapart-textarea" m=\'{"blockElement":"p","formatter":"none","text":"","className":"source"}\' --><p class="source"></p><!-- /mt-beb -->',
    shouldBeCompiled: 1,
    previewHeader:
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.0/marked.min.js" integrity="sha256-POA+Q3FC8tyo/jZhQrw40H5mKcWAABdxNeUQ/uhIm4U=" crossorigin="anonymous"></script>\r\n<script>\r\ndocument.addEventListener("DOMContentLoaded", () => {\r\n  if (document.body.dataset.hasCompiledHtml) {\r\n    return;\r\n  }\r\n\r\n  const source = document.querySelector(".source").innerHTML;\r\n  MTBlockEditorSetCompiledHtml(marked(source));\r\n});\r\n</script>',
    label: "Markdown",
    rootBlock: "",
  })
);
