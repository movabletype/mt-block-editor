/// <reference types="cypress" />

import { apply, unload, blur, wait } from "../helpers";

context("Block", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");

    apply({
      id: textareaId,
    });
  });

  context("IframePreview", () => {
    it("default", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="test-iframedata"]`).click();
        });

      wait(1);

      cy.get(`input[data-property-name="text"]`).type("test");

      blur();

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe")!;
        const rect = iframe.getBoundingClientRect();
        expect(rect.width).greaterThan(100);
      });
    });

    if (!Cypress.env("ci")) {
      it("show editor after loaded", () => {
        unload({ id: textareaId });

        const secondaryId = "secondary";
        cy.window().then((w) => {
          const wrap = w.document.createElement("div");
          wrap.id = "wrap";
          const textarea = w.document.createElement("textarea");
          textarea.id = secondaryId;
          textarea.value = `<!-- mt-beb t="test-iframedata" m='{"text":"test"}'-->test<!-- /mt-beb -->`;
          wrap.appendChild(textarea);
          wrap.style.display = "none";
          w.document.body.appendChild(wrap);
        });
        apply({
          id: secondaryId,
        });

        cy.wait(3000);
        cy.window().then((w) => {
          const wrap = w.document.querySelector<HTMLDivElement>("#wrap");
          if (wrap) {
            wrap.style.display = "";
          }
        });
        cy.wait(500);

        cy.get(".mt-be-block div:last-child").then(($div) => {
          const root = $div.get(0).shadowRoot;
          const iframe = root.querySelector("iframe")!;
          const rect = iframe.getBoundingClientRect();
          expect(rect.width).greaterThan(100);
        });
      });
    }

    it("scheme", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="test-iframedata"]`).click();
        });

      wait(1);

      cy.get(`input[data-property-name="text"]`).type("test");

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.src).match(/^data/);
      });

      cy.get(".mt-be-block").click();

      wait(1);

      cy.get(`select[data-property-name="scheme"]`).select("blob");

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

      cy.get(`input[data-property-name="text"]`).type("test");

      blur();
      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const root = $div.get(0).shadowRoot;
        const iframe = root.querySelector("iframe");

        expect(iframe.getAttribute("sandbox")).equals(null);
      });

      cy.get(".mt-be-block").click();

      wait(1);

      cy.get(`input[data-property-name="sandbox"]`)
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

      cy.get(`input[data-property-name="sandbox"]`).clear();

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
