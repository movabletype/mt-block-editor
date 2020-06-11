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

  it("supported", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="sixapart-oembed"]`).click();

    cy.wait(100);
    type("https://www.youtube.com/watch?v=h9yxBcbw0bw\n");

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="sixapart-oembed" m='{"url":"https://www.youtube.com/watch?v=h9yxBcbw0bw","width":480,"height":270,"providerName":"YouTube"}' h='' --><iframe width="480" height="270" src="https://www.youtube.com/embed/h9yxBcbw0bw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><!-- /mt-beb -->`
    );
  });

  it("unsupported", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="sixapart-oembed"]`).click();

    cy.wait(100);
    type("https://www.example.com/watch?v=h9yxBcbw0bw\n");

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="sixapart-oembed" m='{"url":"https://www.example.com/watch?v=h9yxBcbw0bw"}' h='' -->埋め込み用のHTMLを取得することができませんでした: https://www.example.com/watch?v=h9yxBcbw0bw<!-- /mt-beb -->`
    );
  });
});
