/// <reference types="cypress" />

import { type, apply, serializedTextarea } from "../helpers";

context("Text", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
    apply({
      id: textareaId,
    });
  });

  it("create new block from new line", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    cy.wait(100);
    type("Hello!\n");
    cy.wait(100);
    type("Block Editor!");

    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
    );
  });

  it("merge blocks", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    cy.wait(100);
    type("a\n");
    cy.wait(100);
    type("b{leftarrow}{backspace}");

    serializedTextarea(textareaId)
      .should("have.value", "<!-- mt-beb --><p>ab</p><!-- /mt-beb -->")
      .should(($e) =>
        expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("5")
      );

    type("{backspace}");

    serializedTextarea(textareaId)
      .should("have.value", "<!-- mt-beb --><p>b</p><!-- /mt-beb -->")
      .should(($e) =>
        expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("6")
      );
  });
});
