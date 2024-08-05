/// <reference types="cypress" />

import {
  apply,
  blur,
  registerCustomBlock,
  serializedTextarea,
} from "../helpers";

context("setCompiledHtmlIframePreview", () => {
  const textareaId = "text";

  beforeEach(async () => {
    cy.visit("./cypress/resources/editor.html");

    registerCustomBlock({
      icon: "",
      canRemoveBlock: "",
      typeId: "custom-head",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: "",
      html: '<!-- mt-beb t="core-html" --><img src="/images/favicon.ico"><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader: `<script>
          window.addEventListener("load", async () => {
            const imgs = document.querySelectorAll("img");
            for (let i = 0; i < imgs.length; i++) {
              const img = imgs[i];
              img.setAttribute("width", img.naturalWidth);
              img.setAttribute("height", img.naturalHeight);
            }
            MTBlockEditorSetCompiledHtml(document.body.innerHTML);
          });
          </script>`,
      label: "head",
      rootBlock: "",
    });

    const ed = await apply({
      id: textareaId,
    });
    ed.on("beforeRenderIframePreview", (ev) => {
      ev.head += `<base href="https://movabletype.net/">`;
    });
  });

  it("base element is inserted", () => {
    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="custom-head"]`).click();
      });

    blur();

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="custom-head" h='&lt;!-- mt-beb t="core-html" --&gt;&lt;img src="/images/favicon.ico"&gt;&lt;!-- /mt-beb --&gt;' --><img src="/images/favicon.ico" width="16" height="16"><!-- /mt-beb -->`
    );
  });
});
