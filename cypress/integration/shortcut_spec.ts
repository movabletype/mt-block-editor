/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";
import { TRANSITION_TIMEOUT } from "../../src/Component/Overlay";

context("Shortcut", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
  });

  context("Insert Link", () => {
    it("{ctrl}k", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);

      type("{ctrl}k");
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("be.visible");
    });

    it("{ctrl}K", () => {
      apply({
        id: textareaId,
      });

      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      wait(1);

      type("{ctrl}K");
      cy.wait(TRANSITION_TIMEOUT);
      cy.get(".mt-be-dialog").should("not.exist");
    });
  });
});
