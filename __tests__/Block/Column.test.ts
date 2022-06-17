import { newEditor } from "../helper";
import Block from "../../src/Block";
import Text from "../../src/Block/Text";
import Column from "../../src/Block/Column";

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
