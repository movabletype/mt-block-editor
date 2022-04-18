/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";
import { TRANSITION_TIMEOUT } from "../../src/Component/Overlay";

context("Dialog", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
  });

  it("Save", () => {
    apply({
      id: textareaId,
    });

    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`).click();

    wait(1);
    type("./images/logo.png");

    cy.get(`.mt-be-block-toolbar-button`).click({ force: true });
    cy.wait(TRANSITION_TIMEOUT);
    cy.get(".mt-be-dialog").should("be.visible");
    cy.focused().should("have.attr", "name", "linkUrl");
    type("https://example.com/");

    cy.get(".mt-be-btn-primary").click();
    cy.wait(TRANSITION_TIMEOUT);
    cy.get(".mt-be-dialog").should("not.exist");

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="core-image" --><p><a href="https://example.com/" target="_self"><img src="./images/logo.png" class="" alt=""/></a></p><!-- /mt-beb -->`
    );
  });

  it("Cancel", () => {
    apply({
      id: textareaId,
    });

    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`).click();

    wait(1);
    type("./images/logo.png");

    cy.get(`.mt-be-block-toolbar-button`).click({ force: true });
    cy.wait(TRANSITION_TIMEOUT);
    cy.get(".mt-be-dialog").should("be.visible");
    type("https://example.com/");

    cy.get(".mt-be-btn-default").click();
    cy.wait(TRANSITION_TIMEOUT);
    cy.get(".mt-be-dialog").should("not.exist");

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="core-image" --><p><img src="./images/logo.png" class="" alt=""/></p><!-- /mt-beb -->`
    );
  });

  context("close", () => {
    it("click background", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);
      type("./images/logo.png");

      cy.get(`.mt-be-block-toolbar-button`).click({ force: true });
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("be.visible");
      cy.get("body").click();
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("be.visible"); // should not be closed
    });

    it("click close button", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);
      type("./images/logo.png");

      cy.get(`.mt-be-block-toolbar-button`).click({ force: true });
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("be.visible");
      cy.get(".mt-be-dialog-btn-close").click();
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("not.exist");
    });

    it("escape key", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);
      type("./images/logo.png");

      cy.get(`.mt-be-block-toolbar-button`).click({ force: true });
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("be.visible");
      type("{esc}");
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("not.exist");
    });
  });
});
