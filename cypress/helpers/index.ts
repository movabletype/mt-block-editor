/// <reference types="cypress" />
import type { EditorUtil } from "../../src/mt-block-editor";

declare global {
  interface Window {
    MTBlockEditor: typeof EditorUtil;
  }
}

export function type(text, options?): void {
  cy.get("body").type(text, options);
}

export function apply(opts): void {
  cy.window().then((w) => {
    const textarea =
      w.document.querySelector<HTMLTextAreaElement>(`[id="${opts.id}"]`) ||
      w.document.createElement("textarea");
    if (!textarea.id) {
      textarea.id = opts.id;
      w.document.body.appendChild(textarea);
    }

    return w.MTBlockEditor.apply(
      Object.assign(
        {
          mode: "composition",
          stylesheets: [],
          i18n: {
            lng: "ja",
            debug: true,
          },
          shortcutBlockTypes: ["core-text", "core-image", "core-file"],
        },
        opts
      )
    ).then((ed) => {
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
        let count = parseInt(textarea.dataset.mtBlockEditorChangeCount || "0");
        count++;
        textarea.dataset.mtBlockEditorChangeCount = count.toString();
      });
    });
  });
}

export function unload(opts): void {
  cy.window().then((w) => {
    return w.MTBlockEditor.unload(opts);
  });
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
