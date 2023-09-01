/// <reference types="cypress" />

import {
  type,
  apply,
  serializedTextarea,
  wait,
  blur,
  registerCustomBlock,
} from "../helpers";

context("Command", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");

    registerCustomBlock({
      icon: "",
      canRemoveBlock: true,
      typeId: "custom-text-list",
      panelBlockTypes: [],
      shortcutBlockTypes: ["core-text"],
      className: "",
      html: "",
      shouldBeCompiled: false,
      previewHeader: "",
      label: "text list",
      rootBlock: "",
    });
  });

  context("Delete", () => {
    it("By delete key", () => {
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

      cy.get(".mt-be-block").eq(1).click({ force: true });
      cy.get(".mt-be-block").eq(2).click({
        shiftKey: true,
      });

      wait(1);

      cy.get("button").last().click();
      type("{del}");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

    it("By backspace key", () => {
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

      cy.get(".mt-be-block").eq(1).click({ force: true });
      cy.get(".mt-be-block").eq(2).click({
        shiftKey: true,
      });

      wait(1);

      cy.get("button").last().click();
      type("{backspace}");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

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

      type("Block!\n");

      wait(1);

      type("Editor!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-block").eq(1).click({ force: true });
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
  });

  context("Duplicate", () => {
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

      type("Movable Type!");

      cy.get(".mt-be-block").eq(0).click({ force: true });
      cy.get(".mt-be-block").eq(1).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-duplicateBlock"]`).click();

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb -->`
      );
    });

    it("Inside custom block", () => {
      apply({
        id: textareaId,
      });

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-text-list"]`).click();
        });

      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Movable Type!");

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-duplicateBlock"]`).click();

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-text-list" --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- /mt-beb -->`
      );
    });
  });

  if (!Cypress.env("ci")) {
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

        cy.get(".mt-be-block").eq(0).click({ force: true });
        cy.get(".mt-be-block").eq(1).click({
          shiftKey: true,
        });

        wait(1);

        cy.get(".mt-be-btn-move:visible").click();

        wait(1);

        cy.get(`[data-mt-be-command="core-copyBlock"]`).click();

        cy.get(".mt-be-block").eq(2).click({ force: true });

        wait(1);

        cy.get(".mt-be-btn-move:visible").click();

        wait(1);

        cy.get(`[data-mt-be-command="core-pasteBlock"]`).click();

        serializedTextarea(textareaId).should(
          "have.value",
          `<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->`
        );
      });

      it("Inside custom block", () => {
        apply({
          id: textareaId,
        });

        cy.get(`.mt-be-btn-add-bottom`)
          .click()
          .within(() => {
            cy.get(`[data-mt-be-type="custom-text-list"]`).click();
          });

        cy.get(
          `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
        ).click();

        wait(1);

        type("Hello!\n");

        wait(1);

        type("Movable Type!");

        cy.get(".mt-be-btn-move:visible").click();

        wait(1);

        cy.get(`[data-mt-be-command="core-copyBlock"]`).click();
        cy.get(`[data-mt-be-command="core-pasteBlock"]`).click();

        blur();

        serializedTextarea(textareaId).should(
          "have.value",
          `<!-- mt-beb t="custom-text-list" --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- mt-beb --><p>Movable Type!</p><!-- /mt-beb --><!-- /mt-beb -->`
        );
      });

      it("HTML block", () => {
        apply({
          id: textareaId,
        });

        cy.get(`.mt-be-btn-add-bottom`)
          .click()
          .within(() => {
            cy.get(`[data-mt-be-type="core-html"]`).click();
          });

        wait(1);

        type("<A>text</A><custom-element>");

        cy.get(".mt-be-btn-move:visible").click();
        wait(1);

        cy.get(`[data-mt-be-command="core-copyBlock"]`).click();
        cy.get(`[data-mt-be-command="core-pasteBlock"]`).click();

        blur();

        serializedTextarea(textareaId).should(
          "have.value",
          `<!-- mt-beb t="core-html" --><A>text</A><custom-element><!-- /mt-beb --><!-- mt-beb t="core-html" --><A>text</A><custom-element><!-- /mt-beb -->`
        );
      });
    });
  }

  context("Clipboard API is not available", () => {
    it("navigator.permissions.query throws an error. e.g. Firefox", () => {
      apply({
        id: textareaId,
      });

      cy.window().then((win) => {
        win.navigator.clipboard.read = undefined as any;
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

      cy.get(".mt-be-block").eq(0).click({ force: true });
      cy.get(".mt-be-block").eq(1).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-copyBlock"]`).should("be.visible");
      cy.get(`[data-mt-be-command="core-pasteBlock"]`).should("not.exist");
    });

    it("denied. e.g. http://example.com/", () => {
      apply({
        id: textareaId,
      });

      cy.window().then((win) => {
        ["read", "write", "writeText"].forEach((k) => {
          win.navigator.clipboard[k] = undefined as any;
        });
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

      cy.get(".mt-be-block").eq(0).click({ force: true });
      cy.get(".mt-be-block").eq(1).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-btn-move:visible").click();

      wait(1);

      cy.get(`[data-mt-be-command="core-copyBlock"]`).should("not.exist");
      cy.get(`[data-mt-be-command="core-pasteBlock"]`).should("not.exist");
    });
  });
});
