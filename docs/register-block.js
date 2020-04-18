MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-oembed",
    className: "oembed",
    label: "oembed",
    html: `<!-- mtEditorBlock data-mt-block-type="textblock"--><p>http://</p><!-- /mtEditorBlock -->`,
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
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      );

      var html = "<table>";
      var keys = Object.keys(XL_row_object[0]);

      html += "<thead><tr>";
      keys.forEach(function (k) {
        html += "<th>" + k + "</th>";
      });
      html += "</tr></thead>";

      html += "<tbody>";
      XL_row_object.forEach(function (row) {
        html += "<tr>";
        keys.forEach(function (k) {
          html += "<td>" + row[k] + "</td>";
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
