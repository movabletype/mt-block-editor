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

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: 1,
    typeId: "custom-gallery",
    className: "",
    panelBlockTypes: ["core-image"],
    shortcutBlockTypes: [],
    html: "",
    shouldBeCompiled: 1,
    previewHeader: `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.1/css/swiper.min.css" integrity="sha256-urV1luZ8JPIzBb+88vMT8qwbF8jBbHIrwQ8wTghtCOw=" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.1/js/swiper.min.js" integrity="sha256-xKd8O6CvawXs3b8ZCrfuwN9A0ISCM8bUhJC86L6A8OY=" crossorigin="anonymous" defer></script>

<style type="text/css">
  .swiper-container {
    display: flex;
  }
  .swiper-wrapper, .swiper-slide {
    height: auto;
  }
  img {
    max-width: 100%;
    height: auto;
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.hasCompiledHtml) {
      new Swiper(".swiper-container", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      return;
    }

    const imgs = document.querySelectorAll("img");
    const slides = [];
    const sizes = [];
    for (let i = 0; i < imgs.length; i++) {
      const img = imgs[i];
      img.style = {};
      const elm = img.closest("figure") || img;
      elm.style = {};
      slides.push(\`<div class="swiper-slide">$\{elm.outerHTML}</div>\`);
      sizes.push(img.width);
    }

    MTBlockEditorSetCompiledHtml(\`
<div class="swiper-container">
 <div class="swiper-wrapper">
   $\{slides.join("")}
 </div>
 <div class="swiper-pagination"></div>

 <div class="swiper-button-prev"></div>
 <div class="swiper-button-next"></div>
</div>
\`);
  });
</script>
    `,
    label: "ギャラリー",
    rootBlock: "",
  })
);

MTBlockEditor.registerBlockType(
  MTBlockEditor.createBoilerplateBlock({
    typeId: "custom-excel",
    className: "excel",
    label: "エクセル",
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
    typeId: "custom-syntax_highlighting",
    className: "syntax_highlighting",
    label: "ソースコード",
    html: ``,
    canRemoveBlock: false,
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    shouldBeCompiled: true,
    html:
      '<!-- mt-beb t="sixapart-textarea" m="{&quot;blockElement&quot;:&quot;pre&quot;,&quot;formatter&quot;:&quot;none&quot;,&quot;text&quot;:&quot;&quot;,&quot;label&quot;:&quot;ソースコード&quot;,&quot;className&quot;:&quot;source&quot;}"--><pre class="source"></pre><!-- /mt-beb --><!-- mt-beb t="sixapart-select" m="{&quot;options&quot;:&quot;html\\njavascript&quot;,&quot;blockElement&quot;:&quot;p&quot;,&quot;text&quot;:&quot;html&quot;,&quot;label&quot;:&quot;言語&quot;,&quot;className&quot;:&quot;language&quot;}"--><p class="language">html</p><!-- /mt-beb -->',
    previewHeader: `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.0/styles/a11y-light.min.css" integrity="sha256-tJFLL8gFycTbUxiIYM6yLqldxB2YFdzB4viha8cVRsE=" crossorigin="anonymous" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js" integrity="sha256-eOgo0OtLL4cdq7RdwRUiGKLX9XsIJ7nGhWEKbohmVAQ=" crossorigin="anonymous" defer></script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.dataset.hasCompiledHtml) {
    const code = document.querySelector(".source").innerHTML;
    const lang = document.querySelector(".language").textContent;
    MTBlockEditorSetCompiledHtml('<pre><code class="' + lang + '">' + code + "</code></pre>");
  } else {
    hljs.initHighlightingOnLoad();
  }
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
    panelBlockTypes: [
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
    shortcutBlockTypes: [],
    html:
      '<!-- mt-beb t="sixapart-textarea" m=\'{"blockElement":"p","formatter":"none","text":"","className":"source"}\' --><p class="source"></p><!-- /mt-beb -->',
    shouldBeCompiled: 1,
    previewHeader:
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.1.0/marked.min.js" integrity="sha256-POA+Q3FC8tyo/jZhQrw40H5mKcWAABdxNeUQ/uhIm4U=" crossorigin="anonymous"></script>\r\n<script>\r\ndocument.addEventListener("DOMContentLoaded", () => {\r\n  if (document.body.dataset.hasCompiledHtml) {\r\n    return;\r\n  }\r\n\r\n  const source = document.querySelector(".source").innerHTML;\r\n  MTBlockEditorSetCompiledHtml(marked(source));\r\n});\r\n</script>',
    label: "Markdown",
    rootBlock: "",
  })
);

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    typeId: "custom-1header",
    className: "",
    html:
      '<!-- mt-beb t="sixapart-input" m=\'{"blockElement":"h1","text":"","label":"大見出し","helpText":"H1で出力されます"}\' --><h1></h1><!-- /mt-beb -->',
    shouldBeCompiled: "",
    previewHeader: "",
    label: "大見出し",
    rootBlock: "",
  })
);

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    typeId: "custom-2header",
    className: "",
    html:
      '<!-- mt-beb t="sixapart-input" m=\'{"blockElement":"h2","text":"","label":"中見出し","helpText":"H2で出力されます"}\' --><h2></h2><!-- /mt-beb -->',
    shouldBeCompiled: "",
    previewHeader: "",
    label: "中見出し",
    rootBlock: "",
  })
);

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    typeId: "custom-3header",
    className: "",
    html:
      '<!-- mt-beb t="sixapart-input" m=\'{"blockElement":"h3","text":"","label":"小見出し","helpText":"H3で出力されます"}\' --><h3></h3><!-- /mt-beb -->',
    shouldBeCompiled: "",
    previewHeader: "",
    label: "小見出し",
    rootBlock: "",
  })
);

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    typeId: "custom-paragraph",
    className: "",
    html:
      '<!-- mt-beb t="sixapart-textarea" m=\'{"blockElement":"p","formatter":"nl2br","text":"","label":"段落","helpText":"Pで出力されます"}\' --><p></p><!-- /mt-beb -->',
    shouldBeCompiled: "",
    previewHeader: "",
    label: "段落",
    rootBlock: "",
  })
);

window.MTBlockEditor.registerBlockType(
  window.MTBlockEditor.createBoilerplateBlock({
    icon: "",
    canRemoveBlock: "",
    panelBlockTypes: [],
    shortcutBlockTypes: [],
    typeId: "custom-image_text",
    className: "",
    html:
      '<!-- mt-beb t="core-columns" m=\'{"className":"row"}\' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m=\'{"className":"col-sm-6"}\' --><div class=\'mt-be-column col-sm-6\'><!-- mt-beb t="core-image" --><img/><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m=\'{"className":"col-sm-6"}\' --><div class=\'mt-be-column col-sm-6\'><!-- mt-beb t="sixapart-textarea" m=\'{"blockElement":"p","formatter":"nl2br","text":""}\' --><p></p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->',
    shouldBeCompiled: "",
    previewHeader:
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha256-aAr2Zpq8MZ+YA/D6JtRD3xtrwpEz2IqOS+pWD/7XKIw=" crossorigin="anonymous" />',
    label: "画像とテキスト",
    rootBlock: "",
  })
);
