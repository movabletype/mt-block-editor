/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";

context("Columns", () => {
  const textareaId = "text";

  function ignoreErrorHandler() {
    return false;
  }

  describe("custom selectable columns", () => {
    it("default", () => {
      cy.visit("./cypress/resources/editor.html");
      apply({
        id: textareaId,
      });

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-columns"]`).click();
        });

      cy.get(`.mt-be-columns .mt-be-column`).should("have.length", 2);

      cy.get('.mt-be-block-toolbar').click()

      cy.get(".mt-be-block-config-panel input").should("have.length", 3);
      cy.get(".mt-be-block-config-panel input").eq(0).should("have.value", "2");
      cy.get(".mt-be-block-config-panel input").eq(1).should("have.value", "3");
      cy.get(".mt-be-block-config-panel input").eq(2).should("have.value", "4");
    });

    it("2, 4", () => {
      cy.visit("./cypress/resources/editor.html");
      apply({
        id: textareaId,
        block: {
          "core-columns": {
            selectableColumns: [2, 4],
          },
        },
      });

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-columns"]`).click();
        });

      cy.get(`.mt-be-columns .mt-be-column`).should("have.length", 2);

      cy.get('.mt-be-block-toolbar').click()

      cy.get(".mt-be-block-config-panel input").should("have.length", 2);
      cy.get(".mt-be-block-config-panel input").eq(0).should("have.value", "2");
      cy.get(".mt-be-block-config-panel input").eq(1).should("have.value", "4");
    });

    it("2, 4 with defaultColumns 4", () => {
      cy.visit("./cypress/resources/editor.html");
      apply({
        id: textareaId,
        block: {
          "core-columns": {
            selectableColumns: [2, 4],
            defaultColumns: 4,
          },
        },
      });

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-columns"]`).click();
        });

      cy.get(`.mt-be-columns .mt-be-column`).should("have.length", 4);

      cy.get('.mt-be-block-toolbar').click()

      cy.get(".mt-be-block-config-panel input").should("have.length", 2);
      cy.get(".mt-be-block-config-panel input").eq(0).should("have.value", "2");
      cy.get(".mt-be-block-config-panel input").eq(1).should("have.value", "4");
    });

    it("3", () => {
      cy.visit("./cypress/resources/editor.html");
      apply({
        id: textareaId,
        block: {
          "core-columns": {
            selectableColumns: [3],
          },
        },
      });

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-columns"]`).click();
        });

      cy.get(`.mt-be-columns .mt-be-column`).should("have.length", 3);
      cy.get('.mt-be-block-toolbar').should('not.exist')
    });
  });
});
