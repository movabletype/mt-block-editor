/// <reference types="cypress" />

import {
  type,
  apply,
  blur,
  wait,
  registerBlockType,
  serializedTextarea,
} from "../helpers";

context("Block", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");

    apply({
      id: textareaId,
    });
  });

  context("IframePreview", () => {
    it("scheme", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="test-iframedata"]`).click();
        });

      wait(1);

      cy.get("input[name=text]")
        .type("test");

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.src).match(/^data/);
      });

      cy.get(".mt-be-block").click();

      wait(1);

      cy.get("select[name=scheme]")
        .select("blob");

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.src).match(/^blob/);
      });
    });

    it("sandbox", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="test-iframedata"]`).click();
        });

      wait(1);

      cy.get("input[name=text]")
        .type("test");

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.getAttribute("sandbox")).equals(null);
      });

      cy.get(".mt-be-block").click();

      wait(1);

      cy.get("input[name=sandbox]")
        .clear()
        .type("allow-scripts");

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.getAttribute("sandbox")).equals("allow-scripts");
      });

      cy.get(".mt-be-block").click();

      wait(1);

      cy.get("input[name=sandbox]")
        .clear();

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.getAttribute("sandbox")).equals("");
      });
    });
  });
});
