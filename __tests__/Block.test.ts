import Block from "../src/Block";

class TestBlock extends Block {
  public _html = "";
  constructor(init?: Partial<TestBlock>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
  html() {
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
      const b = new TestBlock({ _html: '<p class="a b">test</p>', className: "custom" });
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
      ['<p>test</p>', '<p class="c1 c2">test</p>'],
      ['<p class="a c1 b c2">test</p>', '<p class="a c1 b c2">test</p>'],
      ['<p class="a b c2">test</p>', '<p class="a b c2 c1">test</p>'],
    ])("multiple className: %s", (_html, expected) => {
      const b = new TestBlock({ _html, className: "c1 c2" });
      expect(b.htmlString()).toBe(expected);
    });
  });
});
