import { newEditor } from "../helper";
import Block from "../../src/Block";
import Text from "../../src/Block/Text";
import Column from "../../src/Block/Column";
import "../../src/mt-block-editor";

class TestCompiledBlock extends Block {
  public static typeId = "test-block";
  public _html = "";
  constructor(init?: Partial<TestCompiledBlock>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
  html(): string {
    return this._html;
  }
}

const TestBlock = window.MTBlockEditor.createBoilerplateBlock({
  icon: "",
  iconString: "",
  canRemoveBlock: true,
  typeId: "custom-column",
  className: "",
  html: "",
  shouldBeCompiled: false,
  previewHeader: "",
  label: "test",
  rootBlock: "",
  showPreview: true,
});

test("constructor", () => {
  const b = new Column();
  expect(b).toBeInstanceOf(Column);
  expect(b).toBeInstanceOf(Block);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

describe("toClipboardItem()", () => {
  const editor = newEditor();

  test("get item", async () => {
    const b = new Column({ blocks: [new Text({ text: "<p>test</p>" })] });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>test</p><!-- /mt-beb --></div><!-- /mt-beb -->`
    );
  });

  test("with metadata", async () => {
    const b = new Column({
      blocks: [new Text({ text: "<p>test</p>", className: "custom-text" })],
      className: "custom-column",
    });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="core-column" m='{"className":"custom-column"}' --><div class='mt-be-column custom-column'><!-- mt-beb m='{"className":"custom-text"}' --><p class="custom-text">test</p><!-- /mt-beb --></div><!-- /mt-beb -->`
    );
  });
});

describe("serialize()", () => {
  test("default", async () => {
    const editor = newEditor();
    const b = new TestBlock() as Column;
    b.blocks = [new Text({ text: "<p>test</p>" })];
    expect(await b.serialize({ editor, external: false })).toBe(
      `<!-- mt-beb t="custom-column" --><!-- mt-beb --><p>test</p><!-- /mt-beb --><!-- /mt-beb -->`
    );
  });

  test("has compiled child blocks", async () => {
    const editor = newEditor();
    const b = new TestBlock() as Column;
    b.compiledHtml = "compiled parent content";
    b.blocks = [
      new TestCompiledBlock({
        compiledHtml: "compiled child content",
        _html: `<!-- mt-beb t="sixapart-oembed" m="1" -->embed<!-- /mt-beb -->`,
      }),
    ];
    expect(await b.serialize({ editor, external: false })).toBe(
      `<!-- mt-beb t="custom-column" h='&lt;!-- mt-beb t="test-block" h=&#x27;&amp;lt;!-- mt-beb t="sixapart-oembed" m="1" --&amp;gt;embed&amp;lt;!-- /mt-beb --&amp;gt;&#x27; --&gt;compiled child content&lt;!-- /mt-beb --&gt;' -->compiled parent content<!-- /mt-beb -->`
    );
  });

  test("removeIntermediateProduct", async () => {
    const editor = newEditor();
    const b = new TestBlock() as Column;
    b.compiledHtml = "compiled parent content";
    b.blocks = [
      new TestCompiledBlock({
        compiledHtml: "compiled child content",
        _html: `<!-- mt-beb t="sixapart-oembed" m="1" -->embed<!-- /mt-beb -->`,
      }),
    ];
    b.removeIntermediateProduct = true;
    expect(await b.serialize({ editor, external: false })).toBe(
      `<!-- mt-beb t="custom-column" m='1' h='&lt;!-- mt-beb t="test-block" --&gt;&lt;!-- mt-beb t="sixapart-oembed" m="1" --&gt;embed&lt;!-- /mt-beb --&gt;&lt;!-- /mt-beb --&gt;' -->compiled parent content<!-- /mt-beb -->`
    );
  });
});
