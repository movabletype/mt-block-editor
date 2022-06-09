import Editor from "../../src/Editor";
import Block from "../../src/Block";
import Text from "../../src/Block/Text";

test("constructor", () => {
  const b = new Text();
  expect(b).toBeInstanceOf(Block);
  expect(b).toBeInstanceOf(Text);
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
    const b = new Text({ text: "<p>test</p>" });

    const item = await b.toClipboardItem({ editor });
    expect(item).toBe(`<p>test</p>`);
  });
});
