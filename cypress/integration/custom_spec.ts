/// <reference types="cypress" />

import {
  type,
  apply,
  blur,
  registerCustomBlock,
  serializedTextarea,
} from "../helpers";

context("CustomBlock", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-multicolumns",
      className: "wrap",
      html:
        '<!-- mt-beb t="core-columns" m=\'{"className":"row"}\' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m=\'{"className":"col-left"}\' --><div class=\'mt-be-column col-left\'></div><!-- /mt-beb --><!-- mt-beb t="core-column" m=\'{"className":"col-right"}\' --><div class=\'mt-be-column col-right\'></div><!-- /mt-beb --></div><!-- /mt-beb -->',
      shouldBeCompiled: "",
      previewHeader: "",
      label: "test",
      rootBlock: "div",
    });
    apply({
      id: textareaId,
    });
  });

  context("custom-multicolumns", () => {
    it("add", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-multicolumns"]`).click();
        });

      cy.get(
        `.mt-be-block .mt-be-columns .mt-be-column:nth-child(1) .mt-be-btn-add-bottom`
      )
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      cy.wait(100);
      type("1");

      cy.get(
        `.mt-be-block .mt-be-columns .mt-be-column:nth-child(2) .mt-be-btn-add-bottom`
      )
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      cy.wait(100);
      type("2");

      blur();

      cy.wait(100);
      cy.get("iframe")
        .its("0.contentDocument.body")
        .find("> div.wrap")
        .should("exist");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-multicolumns" --><div class='wrap'><!-- mt-beb t="core-columns" m='{"className":"row"}' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m='{"className":"col-left"}' --><div class='mt-be-column col-left'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='{"className":"col-right"}' --><div class='mt-be-column col-right'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );
    });
  });
});
