/// <reference types="cypress" />

import {
  type,
  apply,
  unload,
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
      panelBlockTypes: ["core-html", "core-columns", "custom-multicolumns"],
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
      html: '<!-- mt-beb m=\'{"label":"背景色","helpText":"a\\nb","className":"color"}\' --><p class="color">青（#00f）</p><!-- /mt-beb --><!-- mt-beb t="custom-contents" --><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader:
        '<script>\r\ndocument.addEventListener("DOMContentLoaded", async () => {\r\n  if (document.body.dataset.hasCompiledHtml) {\r\n    // 処理済み\r\n    return;\r\n  }\r\n\r\n  const colorElm = document.querySelector(".color");\r\n  colorElm.remove();\r\n\r\n  const color = colorElm.textContent.replace(/.*(#[0-9a-fA-F]+).*/, function(all, color) { return color});\r\n  const text = document.body.innerHTML.replace(/[\\r\\n\\s]+$/, "");  \r\n\r\n  MTBlockEditorSetCompiledHtml(`<div class="bg-area" style="background-image: none; background-color: ${color};"><div class="inner-wrap">${text}</div></div>`);\r\n});\r\n</script>',
      label: "背景色 + コンテンツ",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: "",
      typeId: "custom-bgcolor_contents_without_preview",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: "",
      html: '<!-- mt-beb m=\'{"label":"背景色","className":"color"}\' --><p class="color">青（#00f）</p><!-- /mt-beb --><!-- mt-beb t="custom-contents" --><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader:
        '<script>\r\ndocument.addEventListener("DOMContentLoaded", async () => {\r\n  if (document.body.dataset.hasCompiledHtml) {\r\n    // 処理済み\r\n    return;\r\n  }\r\n\r\n  const colorElm = document.querySelector(".color");\r\n  colorElm.remove();\r\n\r\n  const color = colorElm.textContent.replace(/.*(#[0-9a-fA-F]+).*/, function(all, color) { return color});\r\n  const text = document.body.innerHTML.replace(/[\\r\\n\\s]+$/, "");  \r\n\r\n  MTBlockEditorSetCompiledHtml(`<div class="bg-area" style="background-image: none; background-color: ${color};"><div class="inner-wrap">${text}</div></div>`);\r\n});\r\n</script>',
      showPreview: false,
      label: "背景色 + コンテンツ（プレビューなし）",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-wrap",
      panelBlockTypes: [],
      shortcutBlockTypes: ["custom-bgcolor_contents"],
      className: "",
      html: "",
      shouldBeCompiled: 1,
      previewHeader: `
<script>
document.addEventListener("DOMContentLoaded", async () => {
  if (document.body.dataset.hasCompiledHtml) {
    // 処理済み
    return;
  }

  MTBlockEditorSetCompiledHtml('<div class="custom-wrap">' + document.body.innerHTML + '</div>');
});
</script>
      `,
      label: "Wrap",
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
      html: '<!-- mt-beb t="custom-html" --><!-- mt-beb t="core-html" --><!-- /mt-beb --><!-- /mt-beb -->',
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

    registerCustomBlock({
      icon: "",
      canRemoveBlock: true,
      typeId: "custom-styled",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: '<!-- mt-beb t="core-text" --><p>styled</p><!-- /mt-beb -->',
      html: "",
      shouldBeCompiled: 1,
      previewHeader: "<style type='text/css'>div { margin-top: -10px }</style>",
      label: "styled",
      rootBlock: "div",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-root_block_with_header",
      panelBlockTypes: [],
      shortcutBlockTypes: ["custom-html"],
      className: "root_block_with_header",
      html: "",
      shouldBeCompiled: 1,
      previewHeader: `
      <script>
      document.addEventListener("DOMContentLoaded", async () => {
        if (document.body.dataset.hasCompiledHtml) {
          // 処理済み
          return;
        }
      
        MTBlockEditorSetCompiledHtml('test');
      });
      </script>
      `,
      label: "root_block_with_header",
      rootBlock: "div",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-images",
      panelBlockTypes: [],
      shortcutBlockTypes: ["core-image"],
      className: "wrap",
      html: "",
      shouldBeCompiled: 1,
      previewHeader: `
      <script>
      document.addEventListener("DOMContentLoaded", async () => {
        if (document.body.dataset.hasCompiledHtml) {
          // 処理済み
          return;
        }
      
        MTBlockEditorSetCompiledHtml('<div class="custom-images">' + document.body.innerHTML + '</div>');
      });
      </script>
      `,
      label: "images",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: "",
      typeId: "custom-set-compile-html-body",
      panelBlockTypes: [],
      shortcutBlockTypes: [],
      className: "",
      html: '<!-- mt-beb t="core-html" --><!-- /mt-beb -->',
      shouldBeCompiled: 1,
      previewHeader: `
<script>
document.addEventListener('DOMContentLoaded', async () => {
  if (document.body.dataset.hasCompiledHtml) {
    return;
  }

  MTBlockEditorSetCompiledHtml(document.body.innerHTML, {
    preserveBlockData: !!document.body.innerHTML.match(/preserveBlockData/),
  });
});
</script>`,
      label: "set-compile-html-body",
      rootBlock: "",
    });

    registerCustomBlock({
      icon: "",
      canRemoveBlock: 1,
      typeId: "custom-blank-string",
      panelBlockTypes: [],
      shortcutBlockTypes: ["custom-html"],
      className: "",
      html: `<!-- mt-beb t="core-html" --><!-- /mt-beb -->`,
      shouldBeCompiled: 1,
      previewHeader: `
      <script>
      document.addEventListener("DOMContentLoaded", async () => {
        if (document.body.dataset.hasCompiledHtml) {
          // 処理済み
          return;
        }

        MTBlockEditorSetCompiledHtml('');
      });
      </script>
      `,
      label: "blank-string",
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
      cy.get(".mt-be-help-block").should("have.html", "a<br>b");

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
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","helpText":"a\\nb","className":"color"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;a&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><pre>html content</pre><p>Hello</p><p>a</p></div></div><!-- /mt-beb -->`
      );

      cy.get(`.mt-be-block`).should("have.length", 1).click();
      wait(1);
      cy.get(`.mt-be-block .mt-be-block`).last().click();
      wait(1);
      type("{backspace}{backspace}", { delay: 100 });
      wait(1);
      type("!");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","helpText":"a\\nb","className":"color"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello!&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><pre>html content</pre><p>Hello!</p></div></div><!-- /mt-beb -->`
      );
    });

    it("multiple selected", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-html"]`).click();
        });
      type("Test1");
      blur();

      cy.get(`.mt-be-btn-add-bottom`)
        .last()
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-html"]`).click();
        });
      type("Test2");
      blur();

      cy.get(".mt-be-block").eq(0).click();
      cy.get(`.mt-be-block textarea`).should("exist");

      blur();

      cy.get(".mt-be-block").eq(1).click();
      cy.get(".mt-be-block").eq(0).click({
        shiftKey: true,
      });

      cy.get(`.mt-be-block textarea`).should("not.exist");
    });
  });

  context("custom-bgcolor_contents_without_preview", () => {
    it("add", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(
            `[data-mt-be-type="custom-bgcolor_contents_without_preview"]`
          ).click();
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
      type("Hello");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","className":"color"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents_without_preview" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><pre>html content</pre><p>Hello</p></div></div><!-- /mt-beb -->`
      );

      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="core-text"]`
      ).click();

      wait(1);
      type("world");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","className":"color"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents_without_preview" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;world&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><pre>html content</pre><p>Hello</p><p>world</p></div></div><!-- /mt-beb -->`
      );

      cy.get(`.mt-be-block .mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-multicolumns"]`).click();
        });

      wait(1);

      cy.get(
        `.mt-be-block .mt-be-columns .mt-be-column:nth-child(1) .mt-be-btn-add-bottom`
      )
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });

      wait(2);
      type("1");

      blur();

      cy.get(
        `.mt-be-columns .mt-be-block-wrapper .mt-be-block div[contenteditable="true"] p`
      ).should("exist");

      serializedTextarea(textareaId);

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","className":"color"},"2":{"className":"row"},"3":{"className":"col-left"},"4":{"className":"col-right"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents_without_preview" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;world&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-multicolumns" --&gt;&lt;div class=&#x27;wrap&#x27;&gt;&lt;!-- mt-beb t="core-columns" m=&#x27;2&#x27; --&gt;&lt;div class="mt-be-columns row" style="display: flex"&gt;&lt;!-- mt-beb t="core-column" m=&#x27;3&#x27; --&gt;&lt;div class=&#x27;mt-be-column col-left&#x27;&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;1&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="core-column" m=&#x27;4&#x27; --&gt;&lt;div class=&#x27;mt-be-column col-right&#x27;&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><pre>html content</pre><p>Hello</p><p>world</p><div class="wrap"><div class="mt-be-columns row" style="display: flex"><div class="mt-be-column col-left"><p>1</p></div><div class="mt-be-column col-right"></div></div></div></div></div><!-- /mt-beb -->`
      );

      cy.get(`.mt-be-shortcut-block-list [data-mt-be-type="core-text"]`)
        .last()
        .click();

      wait(1);
      type("extra content");

      cy.get(`.mt-be-block textarea`).focus();

      wait(1);
      type("\n<pre>second line</pre>");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="core-context" m='{"1":{"label":"背景色","className":"color"},"2":{"className":"row"},"3":{"className":"col-left"},"4":{"className":"col-right"}}' --><!-- /mt-beb --><!-- mt-beb t="custom-bgcolor_contents_without_preview" h='&lt;!-- mt-beb m=&#x27;1&#x27; --&gt;&lt;p class="color"&gt;青（#00f）&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-contents" --&gt;&lt;!-- mt-beb t="core-html" --&gt;&lt;pre&gt;html content&lt;/pre&gt;&#x0A;&lt;pre&gt;second line&lt;/pre&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;world&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-multicolumns" --&gt;&lt;div class=&#x27;wrap&#x27;&gt;&lt;!-- mt-beb t="core-columns" m=&#x27;2&#x27; --&gt;&lt;div class="mt-be-columns row" style="display: flex"&gt;&lt;!-- mt-beb t="core-column" m=&#x27;3&#x27; --&gt;&lt;div class=&#x27;mt-be-column col-left&#x27;&gt;&lt;!-- mt-beb --&gt;&lt;p&gt;1&lt;/p&gt;&lt;!-- /mt-beb --&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="core-column" m=&#x27;4&#x27; --&gt;&lt;div class=&#x27;mt-be-column col-right&#x27;&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;/div&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><pre>html content</pre>\n<pre>second line</pre><p>Hello</p><p>world</p><div class="wrap"><div class="mt-be-columns row" style="display: flex"><div class="mt-be-column col-left"><p>1</p></div><div class="mt-be-column col-right"></div></div></div></div></div><!-- /mt-beb --><!-- mt-beb --><p>extra content</p><!-- /mt-beb -->`
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

      serializedTextarea(textareaId, { timeout: 10000 }).should(
        "have.value",
        `<!-- mt-beb t="custom-textarea-list-group" h='&lt;!-- mt-beb t="custom-textarea-list" h=&#x27;&amp;lt;!-- mt-beb t="custom-html" h=&amp;#x27;&amp;amp;lt;!-- mt-beb t="core-html" --&amp;amp;gt;a&amp;amp;lt;!-- /mt-beb --&amp;amp;gt;&amp;#x27; --&amp;gt;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;a&amp;lt;!-- /mt-beb --&amp;gt;&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="custom-html" h=&#x27;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;a&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="core-html" --&gt;a&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;&lt;!-- mt-beb t="custom-textarea-list" h=&#x27;&amp;lt;!-- mt-beb t="custom-html" h=&amp;#x27;&amp;amp;lt;!-- mt-beb t="core-html" --&amp;amp;gt;2&amp;amp;lt;!-- /mt-beb --&amp;amp;gt;&amp;#x27; --&amp;gt;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;2&amp;lt;!-- /mt-beb --&amp;gt;&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="custom-html" h=&#x27;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;2&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="core-html" --&gt;2&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="custom-textarea-list" h='&lt;!-- mt-beb t="custom-html" h=&#x27;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;a&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="core-html" --&gt;a&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="custom-html" h='&lt;!-- mt-beb t="core-html" --&gt;a&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="core-html" -->a<!-- /mt-beb --><!-- /mt-beb --><!-- /mt-beb --><!-- mt-beb t="custom-textarea-list" h='&lt;!-- mt-beb t="custom-html" h=&#x27;&amp;lt;!-- mt-beb t="core-html" --&amp;gt;2&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;&lt;!-- mt-beb t="core-html" --&gt;2&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="custom-html" h='&lt;!-- mt-beb t="core-html" --&gt;2&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="core-html" -->2<!-- /mt-beb --><!-- /mt-beb --><!-- /mt-beb --><!-- /mt-beb -->`
      );
    });
  });

  context("custom-styled", () => {
    it("height", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-styled"]`).click();
        });

      blur();
      cy.wait(1000);
      cy.get("iframe").then(($e) => {
        const before = $e.css("height");
        cy.wait(1500);
        cy.get("iframe").then(($e) => {
          const after = $e.css("height");
          expect(before).to.equal(after);
        });
      });
    });
  });

  context("custom-wrap", () => {
    it("nested", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-wrap"]`).click();
        });

      wait(1);
      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="custom-bgcolor_contents"]`
      ).click();

      wait(1);
      cy.get(`.mt-be-block .mt-be-btn-add-bottom`)
        .first()
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });

      wait(1);
      type("a");

      wait(1);
      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="custom-bgcolor_contents"]`
      ).click();

      wait(1);
      cy.get(`.mt-be-block .mt-be-btn-add-bottom`)
        .eq(1)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="core-text"]`).click();
        });

      wait(1);
      type("b");

      blur();

      wait(1);

      const expectedResult = `<div class="custom-wrap"><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><p>a</p></div></div><div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><p>b</p></div></div></div>`;

      serializedTextarea(textareaId).should(($input) => {
        const value = $input.val();
        const html = value.replace(/<!--.*?-->/g, "");
        expect(html).to.equal(expectedResult);
      });

      cy.get(`.mt-be-btn-add-bottom`).click();
      blur();

      // No change.
      serializedTextarea(textareaId).should(($input) => {
        const value = $input.val();
        const html = value.replace(/<!--.*?-->/g, "");
        expect(html).to.equal(expectedResult);
      });
    });

    it("nested : has lots of blocks", () => {
      const list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-wrap"]`).click();
        });

      list.forEach((char, index) => {
        wait(1);
        cy.get(
          `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="custom-bgcolor_contents"]`
        ).click();

        wait(Math.round(index / 2) + 1);
        cy.get(`.mt-be-block .mt-be-btn-add-bottom`)
          .eq(index)
          .click()
          .within(() => {
            cy.get(`[data-mt-be-type="core-text"]`).click();
          });

        wait(Math.round(index / 2) + 1);
        type(char);
      });

      blur();

      wait(1);

      const expectedResult = `<div class="custom-wrap">${list
        .map(
          (char) =>
            `<div class="bg-area" style="background-image: none; background-color: #00f;"><div class="inner-wrap"><p>${char}</p></div></div>`
        )
        .join("")}</div>`;

      serializedTextarea(textareaId).should(($input) => {
        const value = $input.val();
        const html = value.replace(/<!--.*?-->/g, "");
        expect(html).to.equal(expectedResult);
      });

      cy.get(`.mt-be-btn-add-bottom`).click();
      blur();

      // No change.
      serializedTextarea(textareaId).should(($input) => {
        const value = $input.val();
        const html = value.replace(/<!--.*?-->/g, "");
        expect(html).to.equal(expectedResult);
      });
    });
  });

  context("custom-root_block_with_header", () => {
    it("parse", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-root_block_with_header"]`).click();
        });

      blur();

      serializedTextarea(textareaId, { timeout: 10000 }).should(
        "have.value",
        `<!-- mt-beb t="custom-root_block_with_header" h='&lt;div class=&#x27;root_block_with_header&#x27;&gt;&lt;/div&gt;' -->test<!-- /mt-beb -->`
      );

      unload({ id: textareaId });
      apply({ id: textareaId });

      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-root_block_with_header"]`).click();
        });

      blur();

      serializedTextarea(textareaId, { timeout: 10000 }).should(
        "have.value",
        `<!-- mt-beb t="custom-root_block_with_header" h='&lt;div class=&#x27;root_block_with_header&#x27;&gt;&lt;/div&gt;' -->test<!-- /mt-beb --><!-- mt-beb t="custom-root_block_with_header" h='&lt;div class=&#x27;root_block_with_header&#x27;&gt;&lt;/div&gt;' -->test<!-- /mt-beb -->`
      );
    });
  });

  context("custom-images", () => {
    it("parse", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-images"]`).click();
        });

      cy.get(
        `.mt-be-block .mt-be-shortcut-block-list [data-mt-be-type="core-image"]`
      ).click();

      type("https://example.com/1.jpg");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-images" h='&lt;!-- mt-beb t="core-image" --&gt;&lt;p&gt;&lt;img src="https://example.com/1.jpg" class="" alt=""/&gt;&lt;/p&gt;&lt;!-- /mt-beb --&gt;' --><div class="custom-images"><p><img src="https://example.com/1.jpg" class="" alt=""></p></div><!-- /mt-beb -->`
      );

      cy.get(`.mt-be-block`).click();
      cy.get(".mt-be-block-toolbar--block button").first().click();

      cy.get(`input[data-property-name="linkUrl"]`).focus();

      type("https://example.com/page.html");
      cy.get(".mt-be-btn-primary").click();

      blur();

      serializedTextarea(textareaId);

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-images" h='&lt;!-- mt-beb t="core-image" --&gt;&lt;p&gt;&lt;a href="https://example.com/page.html" target="_self"&gt;&lt;img src="https://example.com/1.jpg" class="" alt=""/&gt;&lt;/a&gt;&lt;/p&gt;&lt;!-- /mt-beb --&gt;' --><div class="custom-images"><p><a href="https://example.com/page.html" target="_self"><img src="https://example.com/1.jpg" class="" alt=""></a></p></div><!-- /mt-beb -->`
      );
    });
  });

  context("custom-multicolumns", () => {
    it("default", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-set-compile-html-body"]`).click();
        });

      type("test");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-set-compile-html-body" h='&lt;!-- mt-beb t="core-html" --&gt;test&lt;!-- /mt-beb --&gt;' -->test<!-- /mt-beb -->`
      );
    });

    it("preserveBlockData", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-set-compile-html-body"]`).click();
        });

      type("preserveBlockData");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-set-compile-html-body" h='&lt;!-- mt-beb t="core-html" --&gt;preserveBlockData&lt;!-- /mt-beb --&gt;' --><!-- mt-beb t="core-html" -->preserveBlockData<!-- /mt-beb --><!-- /mt-beb -->`
      );
    });
  });

  context("custom-blank-string", () => {
    it("no error", () => {
      cy.get(`.mt-be-btn-add-bottom`)
        .click()
        .within(() => {
          cy.get(`[data-mt-be-type="custom-blank-string"]`).click();
        });

      type("custom-blank-string");

      blur();

      serializedTextarea(textareaId).should(
        "have.value",
        `<!-- mt-beb t="custom-blank-string" h='&lt;!-- mt-beb t="core-html" --&gt;custom-blank-string&lt;!-- /mt-beb --&gt;' --><!-- /mt-beb -->`
      );
    });
  });
});
