/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";

context("Command", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
  });

  context("Multiple selection", () => {
    it("by click : from top to bottom", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(1).click();
      cy.get(".mt-be-block").eq(2).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

    it("by click : add to head", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(1).click();
      cy.get(".mt-be-block").eq(2).click({
        shiftKey: true,
      });
      cy.get(".mt-be-block").eq(0).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

    it("by click : add to tail", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(1).click();
      cy.get(".mt-be-block").eq(2).click({
        shiftKey: true,
      });
      cy.get(".mt-be-block").eq(3).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->`
      );
    });

    it("by click: from bottom to top", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(2).click({ force: true });
      cy.get(".mt-be-block").eq(1).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

    it("by drag : from top to bottom", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(1).trigger("mousedown", { force: true });
      cy.get(".mt-be-block").eq(2).trigger("mouseup", { force: true });

      wait(2);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

    it("by drag : from bottom to top", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(2).trigger("mousedown", { force: true });
      cy.get(".mt-be-block").eq(1).trigger("mouseup", { force: true });

      wait(2);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-deleteBlock"]`).click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });
  });
});
