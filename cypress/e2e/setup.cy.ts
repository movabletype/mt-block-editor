/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";

context("Editor", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
  });

  it("Text block in columns", () => {
    apply({
      id: textareaId,
      mode: "setup",
    });

    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-columns"]`).click();
      });

    cy.get(`.mt-be-block .mt-be-column:nth-child(1) .mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-text"]`).click();
      });
    wait(1);
    type("1");

    blur();

    cy.get(`.mt-be-block .mt-be-column:nth-child(1) .mt-be-block`).click();
    cy.get(
      `.mt-be-block .mt-be-column:nth-child(1) .mt-be-block input[data-property-name="className"]`
    ).click();
    type("custom-class-name");

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="core-context" m='{"1":{"className":"custom-class-name"}}' --><!-- /mt-beb --><!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb m='1' --><p class="custom-class-name">1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --></div><!-- /mt-beb -->`
    );
  });
});
