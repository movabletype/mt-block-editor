/// <reference types="cypress" />

import {
  type,
  apply,
  blur,
  wait,
  registerCustomBlock,
  serializedTextarea,
} from "../helpers";

context("CustomBlock", () => {
  const textareaId = "text";

  beforeEach(() => {
    cy.visit("./cypress/resources/editor.html");

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-multicolumns",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: "wrap",
      html: '<!-- mt-beb t="core-columns" m=\'{"className":"row"}\' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m=\'{"className":"col-left"}\' --><div class=\'mt-be-column col-left\'></div><!-- /mt-beb --><!-- mt-beb t="core-column" m=\'{"className":"col-right"}\' --><div class=\'mt-be-column col-right\'></div><!-- /mt-beb --></div><!-- /mt-beb -->',
      shouldBeCompiled: "",
      previewHeader: "",
      label: "test",
      rootBlock: "div",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-contents",
      panelBlockTypes: ["core-html", "core-columns"],
      shortcutBlockTypes: ["core-text"],
      className: "contents",
      html: "",
      shouldBeCompiled: "",
      previewHeader: "",
      label: "コンテンツ",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: "",
      typeId: "custom-bgcolor_contents",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: "",
      html: '<!-- mt-beb m=\'{"label":"背景色","className":"color"}\' --><p class="color">青（#00f）</p><!-- /mt-beb --><!-- mt-beb t="custom-contents" --><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader:
        '<script>\r\ndocument.addEventListener("DOMContentLoaded", async () => {\r\n  if (document.body.dataset.hasCompiledHtml) {\r\n    // 処理済み\r\n    return;\r\n  }\r\n\r\n  const colorElm = document.querySelector(".color");\r\n  colorElm.remove();\r\n\r\n  const color = colorElm.textContent.replace(/.*(#[0-9a-fA-F]+).*/, function(all, color) { return color});\r\n  const text = document.body.innerHTML.replace(/[\\r\\n\\s]+$/, "");  \r\n\r\n  MTBlockEditorSetCompiledHtml(`<div class="bg-area" style="background-image: none; background-color: ${color};"><div class="inner-wrap">${text}</div></div>`);\r\n});\r\n</script>',
      label: "背景色 + コンテンツ",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: "",
      typeId: "custom-html",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: "",
      html: '<!-- mt-beb t="core-html" --><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader: "",
      label: "textarea",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: true,
      typeId: "custom-textarea-list",
      panelBlockTypes: [],
      shortcutBlockTypes: ["custom-html"],
      className: "",
      html: '<!-- mt-beb t="core-html" --><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader: "",
      label: "textarea list",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: true,
      typeId: "custom-textarea-list-group",
      panelBlockTypes: [],
      shortcutBlockTypes: ["custom-textarea-list"],
      className: "",
      html: "",
      shouldBeCompiled: 1,
      previewHeader: "",
      label: "textarea list group",
      rootBlock: "",
    });

    apply({
      id: textareaId,
    });
  });

  context("custom-multicolumns", () => {
    it("add", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-multicolumns"]`).click();
        });

      cy.get(
        `.mt-be-block .mt-be-columns .mt-be-column:nth-child(1) .mt-be-btn-add-bottom`
      )
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      wait(2);
      type("1");

      cy.get(
        `.mt-be-block .mt-be-columns .mt-be-column:nth-child(2) .mt-be-btn-add-bottom`
      )
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });
      wait(2);
      type("2");

      blur();

      wait(1);
      cy.get("iframe")
        .its("0.contentDocument.body")
        .find("> div.wrap")
        .should("exist");

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"className":"row"},"2":{"className":"col-left"},"3":{"className":"col-right"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-multicolumns" --><div class='wrap'><!-- mt-beb t="core-columns" m='1' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m='2' --><div class='mt-be-column col-left'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='3' --><div class='mt-be-column col-right'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );
    });
  });

  context("custom-bgcolor_contents", () => {
    it("add", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-bgcolor_contents"]`).click();
        });

      wait(1);
      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="core-html"]`
      ).should("not.exist");
      cy.get(`.mt-be-block .mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-html"]`).click();
        });
      wait(1);
      type("<pre>html content</pre>");

      wait(1);
      cy.get(`.mt-be-block .mt-be-btn-add-bottom`).click();
      cy.get(
        `.mt-be-block .mt-be-block-list-wrapper [data-mt-be-type="core-text"]`
      ).should("not.exist");

      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("Hello\n");
      wait(1);
      type("a");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","className":"color"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;a&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><!-- mt-beb m='1' --><!-- /mt-beb --><!-- mt-beb t="custom-contents" --><!-- mt-beb t="core-html" --><pre>html content</pre><!-- /mt-beb --><!-- mt-beb --><p>Hello</p><!-- /mt-beb --><!-- mt-beb --><p>a</p><!-- /mt-beb --><!-- /mt-beb --></div></div><!-- /mt-beb -->`
      );

      cy.get(`.mt-be-block`).click();
      wait(1);
      cy.get(`.mt-be-block .mt-be-block`).last().click();
      wait(1);
      type("{backspace}{backspace}");
      wait(1);
      type("!");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","className":"color"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello!&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><!-- mt-beb m='1' --><!-- /mt-beb --><!-- mt-beb t="custom-contents" --><!-- mt-beb t="core-html" --><pre>html content</pre><!-- /mt-beb --><!-- mt-beb --><p>Hello!</p><!-- /mt-beb --><!-- /mt-beb --></div></div><!-- /mt-beb -->`
      );
    });
  });

  context("custom-textareas", () => {
    it("add", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-textarea-list-group"]`).click();
        });

      wait(1);
      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="custom-textarea-list"]`
      ).click();

      wait(1);
      type("1");

      wait(1);
      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="custom-textarea-list"]`
      ).click();

      wait(1);
      type("2");

      blur();

      wait(1);
      cy.get(`.mt-be-block`).click();

      wait(1);
      type("{del}a");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-textarea-list-group" h='&lt;!-- mt-beb t="custom-textarea-list" h=&#x27;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;a&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="core-html" --&gt;a&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-textarea-list" h=&#x27;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;2&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="core-html" --&gt;2&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="custom-textarea-list" h='&lt;!-- mt-beb t="core-html" --&gt;a&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="core-html" -->a<!-- /mt-beb --><!-- /mt-beb --><!-- mt-beb t="custom-textarea-list" h='&lt;!-- mt-beb t="core-html" --&gt;2&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="core-html" -->2<!-- /mt-beb --><!-- /mt-beb --><!-- /mt-beb -->`
      );
    });
  });
});
