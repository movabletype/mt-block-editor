import { newEditor } from "../helper";
import Block from "../../src/Block";
import Table from "../../src/Block/Table";

test("constructor", () => {
  const b = new Table();
  expect(b).toBeInstanceOf(Block);
  expect(b).toBeInstanceOf(Table);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

describe("toClipboardItem()", () => {
  const editor = newEditor();

  test("get item", async () => {
    const b = new Table({
      text: "<table><tbody><tr><td>test</td></tr></table>",
    });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="core-table" --><table><tbody><tr><td>test</td></tr></table><!-- /mt-beb -->`
    );
  });

  test("with metadata", async () => {
    const b = new Table({
      text: "<table><tbody><tr><td>test</td></tr></table>",
      className: "custom",
    });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(
      `<!-- mt-beb t="core-table" m='{"className":"custom"}' --><table class="custom"><tbody><tr><td>test</td></tr></table><!-- /mt-beb -->`
    );
  });
});
