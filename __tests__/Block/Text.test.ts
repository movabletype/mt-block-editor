import { newEditor } from "../helper";
import Block from "../../src/Block";
import Text from "../../src/Block/Text";

test("constructor", () => {
  const b = new Text();
  expect(b).toBeInstanceOf(Block);
  expect(b).toBeInstanceOf(Text);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

describe("toClipboardItem()", () => {
  const editor = newEditor();

  test("get item", async () => {
    const b = new Text({ text: "<p>test</p>" });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(`<!-- mt-beb --><p>test</p><!-- /mt-beb -->`);
  });

  test("with metadata", async () => {
    const b = new Text({ text: "<p>test</p>", className: "custom" });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb m='{"className":"custom"}' --><p class="custom">test</p><!-- /mt-beb -->`
    );
  });
});
