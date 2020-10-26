MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-oembed",
    className: "oembed",
    label: "oembed",
    html:
      '<!-- mt-beb t="sixapart-input" m="{&quot;blockElement&quot;:&quot;pre&quot;,&quot;text&quot;:&quot;URLを入力してください&quot;,&quot;label&quot;:&quot;コンテンツのURL&quot;,&quot;helpText&quot;:&quot;https://noembed.comを使って、Flickrにも対応したバージョンです。&quot;,&quot;className&quot;:&quot;url&quot;}"--><pre class="url">URLを入力してください</pre><!-- /mt-beb --><!-- mt-beb t="sixapart-select" m="{&quot;options&quot;:&quot;640px\\n800px\\n指定しない&quot;,&quot;blockElement&quot;:&quot;p&quot;,&quot;text&quot;:&quot;640px&quot;,&quot;label&quot;:&quot;最大サイズ&quot;,&quot;className&quot;:&quot;size&quot;}"--><p class="size">640px</p><!-- /mt-beb -->',
    canRemoveBlock: false,
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    shouldBeCompiled: true,
    previewHeader: `
<script>
document.addEventListener("DOMContentLoaded", async () => {
  const url = document.querySelector("pre").textContent;
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

      MTBlockEditorSetCompiledHtml(html, { addEditHistory: true });
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
    typeId: "custom-test",
    className: "excel",
    label: "Test",
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
    canRemoveBlock: 1,
    typeId: "custom-contents",
    panelBlockTypes: ["core-text", "core-html", "core-columns"],
    shortcutBlockTypes: [],
    className: "contents",
    html: "",
    shouldBeCompiled: "",
    previewHeader: "",
    label: "コンテンツ",
    rootBlock: "",
  })
);

MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    typeId: "custom-bgcolor_contents",
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    className: "",
    html:
      '<!-- mt-beb t="sixapart-select" m=\'{"options":"白（#ffffff）\\n赤（#ff0000）\\n緑（#00ff00）\\n青（#0000ff）","blockElement":"p","text":"白（#ffffff）","label":"背景色","className":"color"}\' --><p class="color">白（#ffffff）</p><!-- /mt-beb --><!-- mt-beb t="custom-contents" --><!-- /mt-beb -->',
    shouldBeCompiled: 1,
    previewHeader:
      '<script>\r\ndocument.addEventListener("DOMContentLoaded", async () => {\r\n  if (document.body.dataset.hasCompiledHtml) {\r\n    // 処理済み\r\n    return;\r\n  }\r\n\r\n  const colorElm = document.querySelector(".color");\r\n  colorElm.remove();\r\n\r\n  const color = colorElm.textContent.replace(/.*(#[0-9a-fA-F]+).*/, function(all, color) { return color});\r\n  const text = document.body.innerHTML;  \r\n\r\n  MTBlockEditorSetCompiledHtml(`\r\n    <div class="big-area" style="background-image: none; background-color: ${color};">\r\n      <div class="inner-wrap">\r\n          ${text}\r\n      </div>\r\n    </div>\r\n  `);\r\n});\r\n</script>',
    label: "背景色 + コンテンツ",
    rootBlock: "",
  })
);
