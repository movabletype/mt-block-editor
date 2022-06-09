import Editor from "../../src/Editor";
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
    const input = document.createElement("INPUT");
    input.id = "input-" + Math.random();
    document.body.appendChild(input);
    const editor = new Editor({
      id: input.id,
      stylesheets: [],
    });
    const b = new Table({
      text: "<table><tbody><tr><td>test</td></tr></table>",
    });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe("<table><tbody><tr><td>test</td></tr></table>");
  });
});
