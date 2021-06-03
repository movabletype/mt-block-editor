/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";

context("Editor", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.visit("./cypress/resources/editor.html");
  });

  it("Text block", () => {
    apply({
      id: textareaId,
    });

    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    wait(1);
    type("Hello");

    cy.get(`.mt-be-block`).first().click();
    wait(1);

    cy.get(
      `.mt-be-block .mt-be-block-toolbar-default-items .mt-be-btn-command`
    ).click();
    cy.get(`.mt-be-block .mt-be-block-command-panel .mt-be-btn-add`)
      .last()
      .click();
    cy.get(
      `.mt-be-block .mt-be-block-command-panel [data-mt-be-type="core-text"]`
    ).click();
    wait(1);
    type("Editor!");

    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><p>Hello</p><!-- /mt-beb --><!-- mt-beb --><p>Editor!</p><!-- /mt-beb -->"
    );
  });
});
