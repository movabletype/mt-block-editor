MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-oembed",
    className: "oembed",
    label: "oembed",
    html: `<!-- mt-beb --><p>http://</p><!-- /mt-beb -->`,
    canRemoveBlock: false,
    panelBlockTypes: [],
    shortcutBlockTypes: [],
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
    panelBlockTypes: [],
    shortcutBlockTypes: [],
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

MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: true,
    typeId: "custom-text",
    className: "",
    html: '<!-- mt-beb t="core-context" m=\'{"1":{"label":"text1 label","helpText":"text1 desc","className":"text1 class"},"2":{"label":"text2 label","helpText":"text2 desc","className":"text2 class"}}\' --><!-- /mt-beb --><!-- mt-beb m=\'1\' --><p class="text1 class">text1 value</p><!-- /mt-beb --><!-- mt-beb m=\'2\' --><p class="text2 class">text2 value</p><!-- /mt-beb -->',
    shouldBeCompiled: false,
    previewHeader: "",
    label: "text",
    rootBlock: "div",
  })
);
