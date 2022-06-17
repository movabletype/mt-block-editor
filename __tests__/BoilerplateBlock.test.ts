import Editor from "../src/Editor";
import Block from "../src/Block";
import BlockFactory from "../src/BlockFactory";
import { parseContent, preParseContent } from "../src/util";
import "../src/mt-block-editor";

const TestBlock = window.MTBlockEditor.createBoilerplateBlock({
  icon: "",
  iconString: "",
  canRemoveBlock: true,
  typeId: "custom-multicolumns",
  className: "wrap",
  html:
    '<!-- mt-beb t="core-columns" m=\'{"className":"row"}\' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m=\'{"className":"col-left"}\' --><div class=\'mt-be-column col-left\'></div><!-- /mt-beb --><!-- mt-beb t="core-column" m=\'{"className":"col-right"}\' --><div class=\'mt-be-column col-right\'></div><!-- /mt-beb --></div><!-- /mt-beb -->',
  shouldBeCompiled: false,
  previewHeader: "",
  label: "test",
  rootBlock: "div",
  showPreview: true,
});
window.MTBlockEditor.registerBlockType(TestBlock);

function serializeMeta(block): string {
  const meta = block.metadata();
  if (!meta) {
    return null;
  }
  return JSON.stringify(meta);
}

test("constructor", () => {
  const b = new TestBlock();
  expect(b).toBeInstanceOf(Block);
  expect(b).toBeInstanceOf(TestBlock);
  expect(b.id).toMatch(/^[0-9a-z]{6}$/);
});

describe("htmlString()", () => {
  describe("className", () => {
    test("without className", async () => {
      const blocks = await parseContent(
        preParseContent(
          `<!-- mt-beb t="custom-multicolumns" --><div class='wrap'><!-- mt-beb t="core-columns" m='{"className":"row"}' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m='{"className":"col-left"}' --><div class='mt-be-column col-left'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='{"className":"col-right"}' --><div class='mt-be-column col-right'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
        ),
        new BlockFactory(),
        new Map()
      );
      const block = blocks[0];

      return block
        .serializedString({
          editor: {
            serializeMeta,
          } as Editor,
        })
        .then((str) => {
          expect(str).toBe(
            `<div class='wrap'><!-- mt-beb t="core-columns" m='{"className":"row"}' --><div class="mt-be-columns row" style="display: flex"><!-- mt-beb t="core-column" m='{"className":"col-left"}' --><div class='mt-be-column col-left'><!-- mt-beb --><p>1</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='{"className":"col-right"}' --><div class='mt-be-column col-right'><!-- mt-beb --><p>2</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb --></div>`
          );
        });
    });
  });
});
