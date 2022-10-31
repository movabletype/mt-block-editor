/// <reference types="cypress" />

import { type, apply, serializedTextarea, blur, wait } from "../helpers";

context("Text", () => {
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

  it("hello", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    wait(1);
    type("Hello!");

    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
    );
  });

  it("toolbar", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();
    wait(1);

    cy.get(".mt-be-block-toolbar").should("be.visible");

    type("Toolbar!");

    cy.get(".mt-be-block-toolbar").should("not.be.visible");

    type("{selectAll}{shift}");

    cy.get(".mt-be-block-toolbar").should("be.visible");

    blur();
    wait(1);

    cy.get(".mt-be-block-toolbar").should("not.exist");

    cy.get(".mt-be-block div:last-child").then(($div) => {
      const root = $div.get(0).shadowRoot;
      const editableDiv = root.querySelector("div[contenteditable]");

      editableDiv.dispatchEvent(new Event("mousedown"));

      const range = new Range();
      range.setStart(editableDiv.firstChild.firstChild, 0);
      range.setEnd(editableDiv.firstChild.firstChild, 1);

      const selection = root.getSelection
        ? root.getSelection() // chrome
        : document.getSelection(); // firefox
      selection.addRange(range);

      $div.get(0).ownerDocument.dispatchEvent(new Event("mouseup"));
    });

    cy.get(".mt-be-block-toolbar").should("be.visible");
  });

  it("Editing a range of selections", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();
    wait(1);

    cy.get(".mt-be-block-toolbar").should("be.visible");

    type("Edit with ranges!");

    type("{selectAll}{backspace}");
    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><!-- /mt-beb -->"
    );

    type("{backspace}");
    serializedTextarea(textareaId).should("have.value", "");
  });

  it("typo", () => {
    cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`).click();

    wait(1);
    type("Hell0{backspace}o!");

    serializedTextarea(textareaId).should(
      "have.value",
      "<!-- mt-beb --><p>Hello!</p><!-- /mt-beb -->"
    );
  });

  context("merge blocks", () => {
    it("merge", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("a\n");
      wait(1);
      type("b{leftarrow}{backspace}");

      serializedTextarea(textareaId)
        .should("have.value", "<!-- mt-beb --><p>ab</p><!-- /mt-beb -->")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("5")
        );

      type("{backspace}");

      cy.get(".mt-be-block-toolbar").should("not.be.visible");

      serializedTextarea(textareaId)
        .should("have.value", "<!-- mt-beb --><p>b</p><!-- /mt-beb -->")
        .should(($e) =>
          expect($e.get(0).dataset.mtBlockEditorChangeCount).to.equal("6")
        );
    });

    it("merge to blank text block", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("a\n\n\n", { delay: 100 });
      wait(1);
      type("b{leftarrow}{backspace}");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>a</p><!-- /mt-beb --><!-- mt-beb --><!-- /mt-beb --><!-- mt-beb --><p>b</p><!-- /mt-beb -->"
      );
    });

    it("merge with br", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("a\n{shift}\nb{leftarrow}{leftarrow}{backspace}", { delay: 50 });

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>a<br>b</p><!-- /mt-beb -->"
      );
    });

    it("should not to merge in middle of content", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("a\nb{shift}\nc{leftarrow}{backspace}", { delay: 50 });

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>a</p><!-- /mt-beb --><!-- mt-beb --><p>bc</p><!-- /mt-beb -->"
      );
    });

    it("should not to merge in middle of content - 2", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("a\nbc{leftarrow}{shift}\n{backspace}", { delay: 50 });

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>a</p><!-- /mt-beb --><!-- mt-beb --><p>bc</p><!-- /mt-beb -->"
      );
    });
  });

  context("new blocks", () => {
    it("a plain paragraph", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("a\n");
      wait(1);
      type("b");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>a</p><!-- /mt-beb --><!-- mt-beb --><p>b</p><!-- /mt-beb -->"
      );
    });

    it("a strong element", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(`[aria-label="Bold"] button, button[aria-label="太字"]`).click({
        force: true,
      });
      wait(1);
      type("a\n");
      wait(1);
      type("b");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p><strong>a</strong></p><!-- /mt-beb --><!-- mt-beb --><p>b</p><!-- /mt-beb -->"
      );
    });

    it("em and span elements", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(`[aria-label="Italic"] button, button[aria-label="斜体"]`).click({
        force: true,
      });
      wait(1);
      cy.get(
        `[aria-label="Text color"] button, [aria-label="テキスト色"] span.tox-split-button__chevron`
      ).click({ multiple: true, force: true });
      wait(1);
      cy.get(`div[data-mce-color="#000000"]`).click({ force: true });
      wait(1);
      type("a\n");
      wait(1);
      type("b");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p><span style="color: rgb(0, 0, 0);"><em>a</em></span></p><!-- /mt-beb --><!-- mt-beb --><p>b</p><!-- /mt-beb -->`
      );
    });
  });

  context("style", () => {
    ["20px", "30px"].forEach((fs) => {
      it(fs, () => {
        cy.visit("./cypress/resources/editor.html");
        apply({
          id: textareaId,
          stylesheets: [
            `
  p { font-size: ${fs}; line-height: ${fs} }
          `,
          ],
        });

        cy.get(
          `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
        ).click();
        wait(1);
        type("Hello!");

        blur();
        wait(1);

        cy.get(`.mt-be-block`).click();
        cy.get(`.mt-be-block .mce-content-body`).should(
          "have.css",
          "font-size",
          fs
        );
        cy.get(`.mt-be-block .mce-content-body`).should(
          "have.css",
          "line-height",
          fs
        );
      });
    });
  });

  context("focus", () => {
    it("block", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("Block Editor");

      blur();

      cy.get(`.mt-be-block`).click();

      wait(1);
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

      wait(1);
      type("Rich Editor!");

      blur();

      cy.get(".mt-be-block div:last-child").then(($div) => {
        const el = $div[0].shadowRoot.querySelector("div[contenteditable]");
        const document = el.ownerDocument;
        const range = document.createRange();
        range.setStart(el.childNodes[0].childNodes[0], 4);
        document.getSelection().removeAllRanges(range);
        document.getSelection().addRange(range);
        el.click();
      });

      wait(1);
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

      wait(1);
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
        el.click();
      });

      wait(1);
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

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke(
        "val",
        "aa<strong>bb</strong>cc<strong>dd</strong>"
      );
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

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
        el.click();
      });

      wait(1);
      type("{backspace}");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>aa<strong>b</strong><strong>d</strong></p><!-- /mt-beb -->"
      );
    });
  });

  context("devide blocks", () => {
    it("two paragraphs", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke("val", "<p>a</p><p>b</p>");

      Cypress.on("uncaught:exception", ignoreErrorHandler);
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><p>a</p><!-- /mt-beb --><!-- mt-beb --><p>b</p><!-- /mt-beb -->"
      );
    });

    it("remove first list item", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke(
        "val",
        "<ul><li></li><li>a</li><li>b</li></ul>"
      );

      Cypress.on("uncaught:exception", ignoreErrorHandler);
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

      wait(1);
      type("{backspace}");

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><!-- /mt-beb --><!-- mt-beb --><ul>\n<li>a</li>\n<li>b</li>\n</ul><!-- /mt-beb -->"
      );
    });
  });

  context("Source code", () => {
    it("table", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke(
        "val",
        "<table><tr><td>test</td></tr></table>"
      );

      Cypress.on("uncaught:exception", ignoreErrorHandler);
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        "<!-- mt-beb --><table>\n<tbody>\n<tr>\n<td>test</td>\n</tr>\n</tbody>\n</table><!-- /mt-beb -->"
      );
    });
  });

  context("Escape", () => {
    it("onclick", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke(
        "val",
        `<a onclick="location.href = this.href" href="https://example.com">example.com</a>`
      );

      Cypress.on("uncaught:exception", ignoreErrorHandler);
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

      cy.wait(1);

      cy.get(`.mt-be-block .mce-content-body a`).should(
        "have.attr",
        "onclick",
        "javascript:void(0)"
      );

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><p><a href="https://example.com" onclick="location.href = this.href">example.com</a></p><!-- /mt-beb -->`
      );
    });
  });

  context("Prohibited Tags", () => {
    it("link", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke(
        "val",
        `<link rel="stylesheet" href="https://example.com/example.css">`
      );

      Cypress.on("uncaught:exception", ignoreErrorHandler);
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

      cy.wait(1);

      cy.get(`.mt-be-block .mce-content-body link`).should("not.exist");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><!-- /mt-beb -->`
      );
    });

    it("meta", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      cy.get(
        `button[aria-label="Source code"], button[aria-label="ソースコード"]`
      ).click({ force: true });
      cy.wait(50);
      cy.get(".tox-dialog textarea").invoke("val", `<meta charset='utf-8'>`);

      Cypress.on("uncaught:exception", ignoreErrorHandler);
      cy.get(
        ".tox-dialog .tox-button:not(.tox-button--secondary, .tox-button--icon)"
      ).click();

      cy.wait(1);

      cy.get(`.mt-be-block .mce-content-body meta`).should("not.exist");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb --><!-- /mt-beb -->`
      );
    });
  });

  context("content editable", () => {
    it("not selected", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!");

      wait(1);

      blur();

      cy.get(".mt-be-block div:last-child").then(($div) => {
        expect($div[0].shadowRoot.querySelector("div[contenteditable]")).to.not.be.null;
      });
    });

    it("multiple selected", () => {
      cy.get(
        `.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);

      type("Hello!\n");

      wait(1);

      type("Block!");

      cy.get(".mt-be-block").eq(0).click();
      cy.get(".mt-be-block").eq(1).click({
        shiftKey: true,
      });

      wait(1);

      cy.get(".mt-be-block div:last-child").then(($div) => {
        expect($div[0].shadowRoot.querySelector("div[contenteditable]")).to.be.null;
      });
    });
  });
});
