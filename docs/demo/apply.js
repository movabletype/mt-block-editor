window._loadMTBlockEditor = true;

const GLOBAL_ATTRIBUTES = [
  "id",
  "class",
  "style",
  "title",
  "accesskey",
  "tabindex",
  "lang",
  "dir",
  "draggable",
  "dropzone",
  "contextmenu",
  "hidden",
].join("|");

const ALLOWED_EVENT_ATTRIBUTES = ["onclick"].join("|");

const isDev = /^localhost(?::|$)/.test(location.host);

function keydown(ed, key) {
  return (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation();

    const click = new MouseEvent("click");
    ed.editorElement.dispatchEvent(click);

    setTimeout(() => {
      const keydown = new KeyboardEvent("keydown", {
        key: key,
        ctrlKey: true,
        metaKey: true,
      });
      window.dispatchEvent(keydown);
    }, 100);
  };
}

function apply(opts) {
  const ts = new Date().getTime();
  const loader = [
    isDev
      ? "../dist/mt-block-editor.js"
      : "/mt-block-editor/dist/mt-block-editor.js",
    "https://cdn.movabletype.net/libs/mt-block-editor-block-oembed/0.0.10/mt-block-editor-block-oembed.js",
    "https://cdn.movabletype.net/libs/mt-block-editor-block-form-element/0.0.9/mt-block-editor-block-form-element.js",
    isDev ? "./register-block.js" : "/mt-block-editor/demo/register-block.js",
  ].reduce(
    (chain, m) => chain.then(() => import(`${m}?ts=${ts}`)),
    Promise.resolve()
  );

  const cssUrls = [];
  if (!isDev) {
    cssUrls.push("/mt-block-editor/dist/mt-block-editor.css");
  }
  cssUrls.push(
    "https://cdn.movabletype.net/libs/mt-block-editor-block-oembed/0.0.10/mt-block-editor-block-oembed.css"
  );
  cssUrls.forEach((url) => {
    const link = window.document.createElement("LINK");
    link.rel = "stylesheet";
    link.href = `${url}?ts=${ts}`;
    window.document.querySelector("head").appendChild(link);
  });

  window.addEventListener("keydown", (ev) => {
    if (ev.key === "s" && (ev.ctrlKey || ev.metaKey)) {
      ev.preventDefault();
      MTBlockEditor.serialize().then(function () {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(
          new Blob([document.querySelector("#body").value], {
            type: "text/plain",
          })
        );
        a.setAttribute("download", "body.html");
        a.dispatchEvent(new MouseEvent("click"));
      });
    }
  });

  return loader
    .then(() => {
      return window;
    })
    .then(({ MTBlockEditor, sessionStorage, document }) => {
      return MTBlockEditor.apply(
        Object.assign(
          {
            mode: "composition",
            id: "body",
            stylesheets: [
              (() => {
                const a = document.createElement("A");
                a.href = isDev
                  ? "./editor-content.css"
                  : "/mt-block-editor/demo/editor-content.css";
                return a.href;
              })(),
            ],
            i18n: {
              lng: "ja",
              debug: true,
            },
            shortcutBlockTypes: ["core-text", "core-image", "core-file"],
            panelBlockTypes: [
              "core-text",
              "core-image",
              "core-file",
              "core-html",
              "sixapart-oembed",
              "core-horizontalrule",
              "core-table",
              "core-columns",
            ],
            block: {
              "sixapart-oembed": {
                resolver: async ({ url, maxwidth, maxheight }) => {
                  const res = await fetch(
                    `https://noembed.com/embed?url=${url}&maxwidth=${
                      maxwidth || ""
                    }&maxheight=${maxheight || ""}`
                  );
                  return await res.json();
                },
              },
            },
          },
          opts
        )
      ).then((ed) => {
        ed.on("buildTinyMCESettings", ({ block, settings }) => {
          settings.plugins += " mt_security";
          settings.extended_valid_elements = [
            // we embed 'a[onclick]' by inserting image with popup
            `a[${GLOBAL_ATTRIBUTES}|${ALLOWED_EVENT_ATTRIBUTES}|href|target|name]`,
            // allow SPAN element without attributes
            `span[${GLOBAL_ATTRIBUTES}|${ALLOWED_EVENT_ATTRIBUTES}]`,
            // allow SCRIPT element
            "script[id|name|type|src]",
          ].join(",");
          settings.valid_children = "+a[div]";
        });

        document
          .getElementById("undo")
          .addEventListener("click", keydown(ed, "z"));
        document
          .getElementById("redo")
          .addEventListener("click", keydown(ed, "y"));
        ed.on("change", () => {
          document.getElementById("undo").disabled = !ed.editManager.canUndo();
          document.getElementById("redo").disabled = !ed.editManager.canRedo();
        });

        return ed;
      });
    });
}

document.getElementById("export").addEventListener("click", (ev) => {
  ev.preventDefault();
  MTBlockEditor.serialize().then(function () {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob(
        [
          document
            .querySelector("#body")
            .value.replace(/<!--\s+\/?mt-beb.*?-->/g, ""),
        ],
        {
          type: "text/plain",
        }
      )
    );
    a.setAttribute("download", "export.html");
    a.dispatchEvent(new MouseEvent("click"));
  });
});

window.jQuery('[data-toggle="tooltip"]').tooltip();

const opts = {};
const optsEl = document.getElementById("mt-block-editor-options");
if (optsEl) {
  const override = JSON.parse(optsEl.textContent);
  if (override.stylesheets) {
    override.stylesheets = override.stylesheets.map((s) => {
      const a = document.createElement("A");
      a.href = isDev ? s : `/mt-block-editor/demo/${s}`;
      return a.href;
    });
  }
  Object.assign(opts, override);
}

apply(opts);
