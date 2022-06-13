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
      `.mt-be-block .mt-be-block-toolbar-default-items .mt-be-btn-command-panel`
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

  context("Copy and Paste", () => {
    it("By context menu", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(1).click();

      wait(1);

      cy.get(
        `.mt-be-block .mt-be-block-toolbar-default-items .mt-be-btn-command-panel`
      ).click();
      cy.get(`[data-mt-be-command="core-copyBlock"]`).click();
      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      cy.get(".mt-be-block").eq(1).click();

      wait(1);

      cy.get(
        `.mt-be-block .mt-be-block-toolbar-default-items .mt-be-btn-command-panel`
      ).click();
      cy.get(`[data-mt-be-command="core-pasteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
      );
    });
  });
});
