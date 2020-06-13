/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur } from "../helpers";

context("Text", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
    apply({
      id: textareaId,
    });
  });

  it("create new block from new line", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    cy.wait(100);
    type("Hello!\n");
    cy.wait(100);
    type("Block Editor!");

    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
    );
  });

  it("merge blocks", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    cy.wait(100);
    type("a\n");
    cy.wait(100);
    type("b{leftarrow}{backspace}");

    serializedTextarea(textareaId)
      .should("have.value", "<!-- mt-beb --><p>ab</p><!-- /mt-beb -->")
      .should(($e) =>
        expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("5")
      );

    type("{backspace}");

    serializedTextarea(textareaId)
      .should("have.value", "<!-- mt-beb --><p>b</p><!-- /mt-beb -->")
      .should(($e) =>
        expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("6")
      );
  });

  context("style", () => {
    ["20px", "30px"].forEach(fs => {
      it(fs, () => {
        cy.visit("./cypress/resources/editor.html");
        apply({
          id: textareaId,
          stylesheets: [`
  p { font-size: ${fs}; line-height: ${fs} }
          `],
        });

        cy.get(
          `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
        ).click();
        cy.wait(100);
        type("Hello!");

        blur();
        cy.wait(100);

        cy.get(`.mt-be-block`).click();
        cy.get(`.mt-be-block .mce-content-body`).should(
          "have.css",
          "font-size",
          fs,
        );
        cy.get(`.mt-be-block .mce-content-body`).should(
          "have.css",
          "line-height",
          fs,
        );
      });
    });
  });

  context("focus", () => {
    it("block", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      type("Block Editor");

      blur();

      cy.get(`.mt-be-block`).click();

      cy.wait(100);
      type("!");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
      );
    });

    it("caret", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      type("Rich Editor!");

      blur();

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const el = $div[0].shadowRoot.querySelector("div[contenteditable]");
        const document = el.ownerDocument;
        const range = document.createRange();
        range.setStart(el.childNodes[0].childNodes[0], 4);
        document.getSelection().removeAllRanges(range);
        document.getSelection().addRange(range);
      });
      cy.get(`.mt-be-block`).click();

      cy.wait(100);
      type("{backspace}{backspace}{backspace}{backspace}Block");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
      );
    });

    it("simple range", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      type("Rich Editor!");

      blur();

      // range: "|Rich| Editor"
      cy.get(".mt-be-block div:last-child").then(($div) => {
        const el = $div[0].shadowRoot.querySelector("div[contenteditable]");
        const document = el.ownerDocument;
        const range = document.createRange();
        range.setStart(el.childNodes[0].childNodes[0], 0);
        range.setEnd(el.childNodes[0].childNodes[0], 4);
        document.getSelection().removeAllRanges(range);
        document.getSelection().addRange(range);
      });
      cy.get(`.mt-be-block`).click();

      cy.wait(100);
      type("{backspace}Block");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
      );
    });

    it("complex range", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      cy.get(`[aria-label="Source code"] button`).click({ force: true });
      cy.wait(50);
      cy.get(".mce-window textarea").invoke(
        "val",
        "aa<strong>bb</strong>cc<strong>dd</strong>"
      );
      cy.get(".mce-window .mce-primary button:first-child").click();

      blur();

      // range: "aab|bccd|d"
      cy.get(".mt-be-block div:last-child").then(($div) => {
        const el = $div[0].shadowRoot.querySelector("div[contenteditable]");
        const document = el.ownerDocument;
        const range = document.createRange();
        range.setStart(el.childNodes[0].childNodes[1].childNodes[0], 1);
        range.setEnd(el.childNodes[0].childNodes[3].childNodes[0], 1);
        document.getSelection().removeAllRanges(range);
        document.getSelection().addRange(range);
      });
      cy.get(`.mt-be-block`).click();

      cy.wait(100);
      type("{backspace}");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>aa<strong>b</strong><strong>d</strong></p><!-- /mt-beb -->"
      );
    });
  });
});
