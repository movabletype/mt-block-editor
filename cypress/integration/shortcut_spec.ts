/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";
import { TRANSITION_TIMEOUT } from "../../src/Component/Overlay";

context("Shortcut", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
  });

  context("Insert Link", () => {
    it("⌘+k", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);

      type("{meta}k");
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("be.visible");
    });

    it("⌘+K", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);

      type("{meta}K");
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("not.exist");
    });
  });

  context("Copy and Paste", () => {
    it("⌘c then ⌘v", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello Editor!");

      wait(1);

      type("{meta}c");

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-horizontalrule"]`).click();
        });

      wait(1);

      type("{meta}v");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello Editor!</p><!-- /mt-beb --><!-- mt-beb t="core-horizontalrule" --><hr/><!-- /mt-beb --><!-- mt-beb --><p>Hello Editor!</p><!-- /mt-beb -->`
      );
    });
  });

  context("Duplicate", () => {
    it("⌘d", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello Editor!");

      wait(1);

      type("{meta}d");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello Editor!</p><!-- /mt-beb --><!-- mt-beb --><p>Hello Editor!</p><!-- /mt-beb -->`
      );
    });
  });
});
