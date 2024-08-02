/// <reference types="cypress" />

import { apply, serializedTextarea, wait } from "../helpers";

context("Table", () => {
  const textareaId = "text";

  function ignoreErrorHandler() {
    return false;
  }

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");
    apply({
      id: textareaId,
    });
  });

  afterEach(() => {
    Cypress.off("uncaught:exception", ignoreErrorHandler);
  });

  it("A table is inserted with the Insert button", () => {
    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-table"]`).click();
      });

    wait(1);
    cy.get(
      `button[aria-label="Source code"], button[aria-label="ソースコード"]`
    ).click({ force: true });
    cy.wait(50);

    // emulation
    cy.get(".tox-dialog textarea").invoke(
      "val",
      `
<table style="border-collapse: collapse; width: 99.9489%;" border="1">
<tbody>
<tr>
<td>a</td>
<td>b</td>
</tr>
</tbody>
</table>
`
    );

    Cypress.on("uncaught:exception", ignoreErrorHandler);
    cy.get(
      ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
    ).click();

    cy.get(".mt-be-block table:not(.mce-item-table) td").then(($td) => {
      const computedStyle = window.getComputedStyle($td[0]);
      expect(parseInt(computedStyle.borderWidth)).to.greaterThan(0);
    });

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="core-table" --><table style="border-collapse: collapse; width: 99.9489%;" border="1">\n<tbody>\n<tr>\n<td>a</td>\n<td>b</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
    );
  });

  it("A table is inserted with the source code editor", () => {
    cy.get(`.mt-be-btn-add-bottom`)
      .click()
      .within(() => {
        cy.get(`[data-mt-be-type="core-table"]`).click();
      });

    wait(1);
    cy.get(
      `button[aria-label="Source code"], button[aria-label="ソースコード"]`
    ).click({ force: true });
    cy.wait(50);

    // emulation
    cy.get(".tox-dialog textarea").invoke(
      "val",
      `
<table>
<tbody>
<tr>
<td>a</td>
<td>b</td>
</tr>
</tbody>
</table>
`
    );

    Cypress.on("uncaught:exception", ignoreErrorHandler);
    cy.get(
      ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
    ).click();

    cy.get(".mt-be-block table.mce-item-table td").then(($td) => {
      const computedStyle = window.getComputedStyle($td[0]);
      expect(parseInt(computedStyle.borderWidth)).to.greaterThan(0);
    });

    serializedTextarea(textareaId).should(
      "have.value",
      `<!-- mt-beb t="core-table" --><table>\n<tbody>\n<tr>\n<td>a</td>\n<td>b</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->`
    );
  });
});
