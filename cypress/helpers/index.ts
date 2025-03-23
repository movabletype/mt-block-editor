/// <reference types="cypress" />
import type { Editor } from "../../src/Editor";
import type { EditorUtil } from "../../src/mt-block-editor";

declare global {
  interface Window {
    MTBlockEditor: typeof EditorUtil;
  }
}

export function type(text, options?): void {
  cy.get("body").type(text, options);
}

export function apply(opts): Promise<Editor> {
  let resolve: (ed: Editor) => void;
  const promise = new Promise<Editor>((_resolve) => {
    resolve = _resolve;
  });
  cy.window().then((w) => {
    const textarea =
      w.document.querySelector<HTMLTextAreaElement>(`[id="${opts.id}"]`) ||
      w.document.createElement("textarea");
    if (!textarea.id) {
      textarea.id = opts.id;
      w.document.body.appendChild(textarea);
    }

    w.MTBlockEditor.apply(
      Object.assign(
        {
          mode: "composition",
          stylesheets: [],
          i18n: {
            lng: "ja",
            debug: true,
          },
          shortcutBlockTypes: ["core-text", "core-image", "core-file"],
          block: {
            "sixapart-oembed": {
              resolver: async ({ url, maxwidth, maxheight }) => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                return {
                  title: "mt-custom-block-builder",
                  author_name: "Taku Amano",
                  author_url: "https://www.youtube.com/@takuamano540",
                  type: "video",
                  height: 150,
                  width: 200,
                  version: "1.0",
                  provider_name: "YouTube",
                  provider_url: "https://www.youtube.com/",
                  thumbnail_height: 360,
                  thumbnail_width: 480,
                  thumbnail_url:
                    "https://i.ytimg.com/vi/NsXejoHIjOU/hqdefault.jpg",
                  html: '<iframe width="200" height="150" src="https://www.youtube.com/embed/NsXejoHIjOU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="mt-custom-block-builder"></iframe>',
                };
              },
            },
          },
        },
        opts
      )
    )
      .then((ed) => {
        ed.on("buildTinyMCESettings", ({ settings }) => {
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

        ed.on("change", () => {
          let count = parseInt(
            textarea.dataset.mtBlockEditorChangeCount || "0"
          );
          count++;
          textarea.dataset.mtBlockEditorChangeCount = count.toString();
        });

        return ed;
      })
      .then(resolve);
  });

  return promise;
}

export function unload(opts): Promise<void> {
  let resolve: () => void;
  const promise = new Promise<void>((_resolve) => {
    resolve = _resolve;
  });
  cy.window().then(async (w) => {
    await w.MTBlockEditor.unload(opts);
    resolve();
  });
  return promise;
}

export function registerCustomBlock(block): void {
  cy.window().then((w) => {
    return w.MTBlockEditor.registerBlockType(
      w.MTBlockEditor.createBoilerplateBlock(block)
    );
  });
}

export function registerBlockType(block): void {
  cy.window().then((w) => {
    return w.MTBlockEditor.registerBlockType(block);
  });
}

export function serializedTextarea(
  id: string,
  opts = {}
): Cypress.Chainable<JQuery<HTMLElement>> {
  cy.window().then(opts, (w) => w.MTBlockEditor.serialize());
  return cy.get(`#${id}`);
}

export function blur(): void {
  cy.window().then((w) => {
    const footer = w.document.createElement("a");
    w.document.body.appendChild(footer);
    footer.click();
    footer.remove();
  });
}

export function wait(count): void {
  count = count || 1;
  cy.wait((Cypress.env("wait_unit_time") || 100) * count);
}
