export function type(...args) {
  cy.get("body").type(...args);
}

export function apply(opts) {
  cy.window().then((w) => {
    const textarea = w.document.createElement("TEXTAREA");
    textarea.id = opts.id;
    w.document.body.appendChild(textarea);

    return w.MTBlockEditor.apply(
      Object.assign(
        {
          mode: "composition",
          stylesheets: [],
          i18n: {
            lng: "ja",
            debug: true,
          },
          shortcutBlockTypes: ["sixapart-oembed"],
          block: {
            "sixapart-oembed": {
              resolver: async ({url, maxWidth, maxHeight}) => {
                if (/youtube/.test(url)) {
                  return {
                    height: 270,
                    provider_name: "YouTube",
                    html:
                      '<iframe width="480" height="270" src="https://www.youtube.com/embed/h9yxBcbw0bw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                    author_name: "ドクター・キャピタルDr. Capital",
                    title:
                      "スピッツ (Spitz) の チェリー (Cherry) - Dr. Capital",
                    author_url: "https://www.youtube.com/user/capitalguitar",
                    width: 480,
                    version: "1.0",
                    thumbnail_width: 480,
                    provider_url: "https://www.youtube.com/",
                    thumbnail_url:
                      "https://i.ytimg.com/vi/h9yxBcbw0bw/hqdefault.jpg",
                    type: "video",
                    thumbnail_height: 360,
                  };
                } else {
                  throw "error";
                }
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
          "a[href|title|target|name|id|class|onclick]",
          // preserve the P elements that have no text nodes (`<p></p>`) for backward compatibility
          "+p[style|class]",
          // allow SCRIPT element
          "script[id|name|type|src]",
          // allow SPAN element without attributes
          "+span[*]",
        ].join(",");
        settings.valid_children = "+a[div]";
      });

      ed.on("change", ({ editor }) => {
        let count = textarea.dataset.mtBlockEditorChangeCount || 0;
        count++;
        textarea.dataset.mtBlockEditorChangeCount = count;
      });
    });
  });
}

export function serializedTextarea(id) {
  cy.window().then((w) => w.MTBlockEditor.serialize());
  return cy.get(`#${id}`);
}

export function blur() {
  cy.window().then((w) => {
    const footer = w.document.createElement("a");
    w.document.body.appendChild(footer);
    footer.click();
    footer.remove();
  });
}
