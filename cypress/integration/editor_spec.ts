/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur } from "../helpers";

context("Editor", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
  });

  it("Hello", () => {
    apply({
      id: textareaId,
    });

    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    cy.wait(100);
    type("Hello Block Editor!");

    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><p>Hello Block Editor!</p><!-- /mt-beb -->"
    );
  });

  it("rootClassName", () => {
    const rootClassName = "special-root-class-name";
    apply({
      id: textareaId,
      rootClassName: rootClassName,
    });

    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    cy.wait(100);
    type("Hello Block Editor!");

    blur();
    cy.get(".mt-block-editor .mt-be-block > div:last-child")
      .should(($e) => {
        const root = $e.get(0).shadowRoot.childNodes[0];
        expect(root.className).to.equal(rootClassName);
      });
  });
});
