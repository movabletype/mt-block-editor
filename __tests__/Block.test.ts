import { newEditor } from "./helper";
import Block from "../src/Block";

class TestBlock extends Block {
  public static typeId = "test-test";
  public _html = "";
  constructor(init?: Partial<TestBlock>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
  html(): string {
    return this._html;
  }
}

test("constructor", () => {
  const b = new TestBlock();
  expect(b).toBeInstanceOf(Block);
  expect(b).toBeInstanceOf(TestBlock);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

test("id collision", () => {
  const count = 1024;
  const ids = {};
  for (let i = 0; i < count; i++) {
    ids[new TestBlock().id]++;
  }
  expect(Object.keys(ids).length).toBe(count);
});

describe("htmlString()", () => {
  describe("className", () => {
    test("without className", () => {
      const b = new TestBlock({ _html: "<p>test</p>" });
      expect(b.htmlString()).toBe("<p>test</p>");
    });

    test("add className", () => {
      const b = new TestBlock({ _html: "<p>test</p>", className: "custom" });
      expect(b.htmlString()).toBe('<p class="custom">test</p>');
    });

    test("append className", () => {
      const b = new TestBlock({
        _html: '<p class="a b">test</p>',
        className: "custom",
      });
      expect(b.htmlString()).toBe('<p class="a b custom">test</p>');
    });

    test.each([
      ['<p class="custom">test</p>', '<p class="custom">test</p>'],
      ['<p class="a custom b">test</p>', '<p class="a custom b">test</p>'],
    ])("dedup: %s", (_html, expected) => {
      const b = new TestBlock({ _html, className: "custom" });
      expect(b.htmlString()).toBe(expected);
    });

    test.each([
      ["<p>test</p>", '<p class="c1 c2">test</p>'],
      ['<p class="a c1 b c2">test</p>', '<p class="a c1 b c2">test</p>'],
      ['<p class="a b c2">test</p>', '<p class="a b c2 c1">test</p>'],
    ])("multiple className: %s", (_html, expected) => {
      const b = new TestBlock({ _html, className: "c1 c2" });
      expect(b.htmlString()).toBe(expected);
    });
  });
});

describe("serialize()", () => {
  test("simple", async () => {
    const editor = newEditor();
    const b = new TestBlock({ _html: "<p>test</p>" });
    expect(await b.serialize({ editor, external: false })).toBe(
      `<!-- mt-beb t="test-test" --><p>test</p><!-- /mt-beb -->`
    );
  });

  test("has compiledHtml", async () => {
    const editor = newEditor();
    const b = new TestBlock({
      compiledHtml: "Hello",
      _html: `<!-- mt-beb t="sixapart-oembed" m="1" -->embed<!-- /mt-beb -->`,
    });
    expect(await b.serialize({ editor, external: false })).toBe(
      `<!-- mt-beb t="test-test" h='&lt;!-- mt-beb t="sixapart-oembed" m="1" --&gt;embed&lt;!-- /mt-beb --&gt;' -->Hello<!-- /mt-beb -->`
    );
  });
});

describe("toClipboardItem()", () => {
  test("get item", async () => {
    const editor = newEditor();
    const b = new TestBlock({ _html: "<p>test</p>" });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="test-test" --><p>test</p><!-- /mt-beb -->`
    );
  });
});
