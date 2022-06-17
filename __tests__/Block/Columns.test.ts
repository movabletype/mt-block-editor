import { newEditor } from "../helper";
import Block from "../../src/Block";
import Text from "../../src/Block/Text";
import Column from "../../src/Block/Column";
import Columns from "../../src/Block/Columns";

test("constructor", () => {
  const b = new Columns();
  expect(b).toBeInstanceOf(Columns);
  expect(b).toBeInstanceOf(Block);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

describe("toClipboardItem()", () => {
  const editor = newEditor();

  test("get item", async () => {
    const b = new Columns({
      blocks: [
        new Column({ blocks: [new Text({ text: "<p>test1</p>" })] }),
        new Column({ blocks: [new Text({ text: "<p>test2</p>" })] }),
      ],
    });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="core-columns" --><div class="mt-be-columns" style="display: flex"><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>test1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" --><div class='mt-be-column'><!-- mt-beb --><p>test2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
    );
  });

  test("with metadata", async () => {
    const b = new Columns({
      className: "custom-columns",
      blocks: [
        new Column({
          blocks: [
            new Text({ text: "<p>test1</p>", className: "custom-text" }),
          ],
          className: "custom-column",
        }),
        new Column({
          blocks: [
            new Text({ text: "<p>test2</p>", className: "custom-text" }),
          ],
          className: "custom-column",
        }),
      ],
    });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="core-columns" m='{"className":"custom-columns"}' --><div class="mt-be-columns custom-columns" style="display: flex"><!-- mt-beb t="core-column" m='{"className":"custom-column"}' --><div class='mt-be-column custom-column'><!-- mt-beb m='{"className":"custom-text"}' --><p class="custom-text">test1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='{"className":"custom-column"}' --><div class='mt-be-column custom-column'><!-- mt-beb m='{"className":"custom-text"}' --><p class="custom-text">test2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
    );
  });
});
