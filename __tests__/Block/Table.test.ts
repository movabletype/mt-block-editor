import Block from "../../src/Block";
import Table from "../../src/Block/Table";

test("constructor", () => {
  const b = new Table();
  expect(b).toBeInstanceOf(Block);
  expect(b).toBeInstanceOf(Table);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

describe("toClipboardItem()", () => {
  test("get item", async () => {
    const b = new Table({
      text: "<table><tbody><tr><td>test</td></tr></table>",
    });

    const item = await b.toClipboardItem();
    expect(item).toBe("<table><tbody><tr><td>test</td></tr></table>");
  });
});
