/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur } from "../helpers";

context("Undo", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
    apply({
      id: textareaId,
    });
  });

  describe("Add/Remove/Swap", () => {
    it("Add", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      serializedTextarea(textareaId)
        .should("have.value", "<!-- mt-beb --><!-- /mt-beb -->")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("1")
        );

      type("{ctrl}z");

      serializedTextarea(textareaId)
        .should("have.value", "")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("2")
        );

      type("{ctrl}y");

      serializedTextarea(textareaId)
        .should("have.value", "<!-- mt-beb --><!-- /mt-beb -->")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("3")
        );
    });

    it("Remove", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      type("Hello!");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
      );

      cy.get(".mt-be-btn-remove").click();

      serializedTextarea(textareaId)
        .should("have.value", "")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("4")
        );

      type("{ctrl}z");

      serializedTextarea(textareaId)
        .should("have.value", "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("5")
        );

      type("{ctrl}y");

      serializedTextarea(textareaId)
        .should("have.value", "")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("6")
        );
    });

    it("Swap", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      type("Hello!\n");

      cy.wait(100);
      type("ALOHA!");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>ALOHA!</p><!-- /mt-beb -->"
      );

      cy.get(".mt-be-btn-up:visible").click();

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>ALOHA!</p><!-- /mt-beb --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
      );

      type("{ctrl}z");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>ALOHA!</p><!-- /mt-beb -->"
      );

      type("{ctrl}y");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>ALOHA!</p><!-- /mt-beb --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
      );
    });
  });

  describe("Block", () => {
    it("Text", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      cy.wait(100);
      type("Hello!\n");
      cy.wait(100);
      type("Block Editor!");

      type("{ctrl}zz");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
      );

      type("{ctrl}{shift}zz");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
      );

      type("{ctrl}zz");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
      );

      type("{ctrl}yy");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- mt-beb --><p>Block Editor!</p><!-- /mt-beb -->"
      );
    });

    it("Table", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-table"]`).click();
        });
      cy.wait(100);
      cy.get(`button[aria-label="Source code"], button[aria-label="ソースコード"]`).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke(
        "val",
        "<table><tbody><tr><td>1</td><td>2</td></tr></tbody></table>"
      );
      cy.get(".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)").click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-table" --><table>\n<tbody>\n<tr>\n<td>1</td>\n<td>2</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
      );

      type("{del}a");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-table" --><table>\n<tbody>\n<tr>\n<td>a</td>\n<td>2</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
      );

      type("{ctrl}z");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-table" --><table>\n<tbody>\n<tr>\n<td>1</td>\n<td>2</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
      );

      type("{ctrl}z");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-table" --><!-- /mt-beb -->`
      );

      type("{ctrl}y");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-table" --><table>\n<tbody>\n<tr>\n<td>1</td>\n<td>2</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
      );

      type("{ctrl}y");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-table" --><table>\n<tbody>\n<tr>\n<td>a</td>\n<td>2</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
      );
    });

    it("HTML", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-html"]`).click();
        });

      type("a");

      blur();
      cy.get(".mt-block-editor .mt-be-block").click();

      type("{del}b");

      blur();
      cy.get(".mt-block-editor").click();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-html" -->b<!-- /mt-beb -->`
      );

      type("{ctrl}z");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-html" -->a<!-- /mt-beb -->`
      );

      type("{ctrl}z");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-html" --><!-- /mt-beb -->`
      );

      type("{ctrl}y");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-html" -->a<!-- /mt-beb -->`
      );

      type("{ctrl}y");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-html" -->b<!-- /mt-beb -->`
      );
    });

    it("Columns", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-columns"]`).click();
        });

      cy.get(`.mt-be-block .mt-be-column:nth-child(1) .mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      cy.wait(100);
      type("1");

      cy.get(`.mt-be-block .mt-be-column:nth-child(2) .mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      cy.wait(100);
      type("2");

      cy.get(`.mt-be-block`).first().click();
      cy.get(`.mt-be-block-toolbar-button`).click({ force: true });
      cy.get(`input[value="4"]`).click();

      cy.get(`.mt-be-block .mt-be-column:nth-child(3) .mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      cy.wait(100);
      type("3");

      cy.get(`.mt-be-block .mt-be-column:nth-child(4) .mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      cy.wait(100);
      type("4");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>3</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>4</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );

      type("{ctrl}zz");
      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>3</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );

      type("{ctrl}zz");
      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );

      type("{ctrl}z");
      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );

      type("{ctrl}y");
      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );

      type("{ctrl}yy");
      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>3</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );

      type("{ctrl}yy");
      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>3</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>4</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );
    });
  });

  describe("Multiple editor", () => {
    it("secondary", () => {
      const secondaryId = "custom-field";
      apply({
        id: secondaryId,
      });

      cy.get(
        `[data-mt-be-id="${textareaId}"] .mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();
      cy.wait(100);
      type("Hello Primary!");

      cy.get(
        `[data-mt-be-id="${secondaryId}"] .mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();
      cy.wait(100);
      type("Hello Secondary!");

      type("{ctrl}z");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello Primary!</p><!-- /mt-beb -->"
      );
      serializedTextarea(secondaryId).should(
        "have.value",
        "<!-- mt-beb --><!-- /mt-beb -->"
      );

      type("{ctrl}y");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello Primary!</p><!-- /mt-beb -->"
      );
      serializedTextarea(secondaryId).should(
        "have.value",
        "<!-- mt-beb --><p>Hello Secondary!</p><!-- /mt-beb -->"
      );
    });
  });
});
