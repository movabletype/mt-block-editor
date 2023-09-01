/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";

context("HTML", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
    apply({
      id: textareaId,
    });
  });

  it("hello", () => {
    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-html"]`).click();
      });

    wait(1);
    type("<div>Hello!</div>");

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="core-html" --><div>Hello!</div><!-- /mt-beb -->`
    );
  });

  it("margin", () => {
    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-html"]`).click();
      });

    wait(1);
    type(`<div style="margin:10px"></div>`);

    blur();
    cy.wait(4000);

    cy.get(".mt-be-block div:last-child").then(($div) => {
      const root = $div.get(0).shadowRoot;
      const iframe = root.querySelector("iframe");
      expect(iframe.style.height).match(/^[1-2]\dpx$/);
    });
  });

  it("negative margin", () => {
    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-html"]`).click();
      });

    wait(1);
    type(`<div style="margin:100px 10px -10px 10px">test</style>`);

    blur();
    cy.wait(4000);

    cy.get(".mt-be-block div:last-child").then(($div) => {
      const root = $div.get(0).shadowRoot;
      const iframe = root.querySelector("iframe");
      expect(iframe.style.height).match(/^11\dpx$/);
    });
  });
});
