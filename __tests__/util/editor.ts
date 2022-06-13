import Editor from "../../src/Editor";
import BlockFactory from "../../src/BlockFactory";
import ParserContext from "../../src/util/ParserContext";
import {
  parseContent,
  preParseContent,
  findDescendantBlocks,
  getBlocksByRange,
} from "../../src/util/editor";

import { newEditor } from "../helper";

import Text from "../../src/Block/Text";
import Column from "../../src/Block/Column";

function serializeMeta(block): string {
  const meta = block.metadata();
  if (!meta) {
    return null;
  }
  return JSON.stringify(meta);
}

describe("parseContent()", () => {
  test("text block", async () => {
    const blocks = await parseContent(
      preParseContent(`<!-- mt-beb -->test<!-- /mt-beb -->`),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(`<!-- mt-beb -->test<!-- /mt-beb -->`);
      });
  });

  test("remove control chars", async () => {
    const blocks = await parseContent(
      preParseContent(`<!-- mt-beb -->test\x0b<!-- /mt-beb -->`),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(`<!-- mt-beb -->test<!-- /mt-beb -->`);
      });
  });

  test("preserve 4byte chars", async () => {
    const blocks = await parseContent(
      preParseContent(`<!-- mt-beb -->🍣<!-- /mt-beb -->`),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(`<!-- mt-beb -->🍣<!-- /mt-beb -->`);
      });
  });

  test("serialized meta: simple", async () => {
    const blocks = await parseContent(
      preParseContent(
        `<!-- mt-beb t="core-context" m='{"001":{"label":"Test Label"}}' --><!-- /mt-beb --><!-- mt-beb m="001" -->test<!-- /mt-beb -->`
      ),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{"label":"Test Label"}' -->test<!-- /mt-beb -->`
        );
      });
  });

  test("serialized meta: broken", async () => {
    const blocks = await parseContent(
      preParseContent(
        `<!-- mt-beb t="core-context" m='{"001":{"label":"Test Label"}}' --><!-- /mt-beb --><!-- mt-beb m="002" -->test<!-- /mt-beb -->`
      ),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(`<!-- mt-beb -->test<!-- /mt-beb -->`);
      });
  });

  test("serialized meta: broken - 2", async () => {
    const blocks = await parseContent(
      preParseContent(
        `<!-- mt-beb m='002,{"label":"Test Label"}' -->test<!-- /mt-beb -->`
      ),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{"label":"Test Label"}' -->test<!-- /mt-beb -->`
        );
      });
  });

  test("serialized meta: blank", async () => {
    const blocks = await parseContent(
      preParseContent(
        `<!-- mt-beb t="core-context" m='{"001":{"label":"Test Label"}}' --><!-- /mt-beb --><!-- mt-beb m="" -->test<!-- /mt-beb -->`
      ),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(`<!-- mt-beb -->test<!-- /mt-beb -->`);
      });
  });

  test("serialized meta: multiple", async () => {
    const blocks = await parseContent(
      preParseContent(
        `<!-- mt-beb t="core-context" m='{"001":{"label":"Test Label"},"002":{"helpText":"Test Help"}}' --><!-- /mt-beb --><!-- mt-beb m="001,002" -->test<!-- /mt-beb -->`
      ),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{"label":"Test Label","helpText":"Test Help"}' -->test<!-- /mt-beb -->`
        );
      });
  });

  test("serialized meta: multiple with object", async () => {
    const blocks = await parseContent(
      preParseContent(
        `<!-- mt-beb t="core-context" m='{"001":{"label":"Test Label"},"002":{"helpText":"Test Help"}}' --><!-- /mt-beb --><!-- mt-beb m='001,002,{"className":"Test Class"}' -->test<!-- /mt-beb -->`
      ),
      new BlockFactory(),
      new ParserContext()
    );

    const block = blocks[0];
    expect(block).toBeInstanceOf(Text);

    return block
      .serialize({
        editor: {
          serializeMeta,
        } as Editor,
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{"label":"Test Label","helpText":"Test Help","className":"Test Class"}' -->test<!-- /mt-beb -->`
        );
      });
  });
});

describe("findDescendantBlocks", () => {
  const editor = newEditor();
  const textBlocks: Text[] = [];
  for (let i = 0; i < 9; i++) {
    textBlocks.push(new Text());
  }
  const column = new Column();
  column.blocks = [textBlocks[3], textBlocks[4], textBlocks[5]];
  editor.blocks = [
    textBlocks[0],
    textBlocks[1],
    textBlocks[2],
    column,
    textBlocks[6],
    textBlocks[7],
  ];

  describe("from Editor", () => {
    it("find a block", () => {
      const blocks = findDescendantBlocks(editor, [textBlocks[0].id]);
      expect(blocks).toEqual([textBlocks[0]]);
    });

    it("find some blocks", () => {
      const blocks = findDescendantBlocks(editor, [
        textBlocks[0].id,
        textBlocks[1].id,
      ]);
      expect(blocks).toEqual([textBlocks[0], textBlocks[1]]);
    });

    it("find top level and child blocks", () => {
      const blocks = findDescendantBlocks(editor, [
        textBlocks[0].id,
        textBlocks[4].id,
      ]);
      expect(blocks).toEqual([textBlocks[0], textBlocks[4]]);
    });

    it("not found", () => {
      const blocks = findDescendantBlocks(editor, [textBlocks[8].id]);
      expect(blocks).toEqual([]);
    });

    it("only some blocks were found.", () => {
      const blocks = findDescendantBlocks(editor, [
        textBlocks[0].id,
        textBlocks[4].id,
        textBlocks[8].id,
      ]);
      expect(blocks).toEqual([textBlocks[0], textBlocks[4]]);
    });
  });

  describe("from Column", () => {
    it("find a block", () => {
      const blocks = findDescendantBlocks(column, [textBlocks[3].id]);
      expect(blocks).toEqual([textBlocks[3]]);
    });

    it("find some blocks", () => {
      const blocks = findDescendantBlocks(column, [
        textBlocks[4].id,
        textBlocks[5].id,
      ]);
      expect(blocks).toEqual([textBlocks[4], textBlocks[5]]);
    });

    it("not found", () => {
      const blocks = findDescendantBlocks(column, [textBlocks[0].id]);
      expect(blocks).toEqual([]);
    });
  });
});

describe("getBlocksByRange", () => {
  const editor = newEditor();
  const textBlocks: Text[] = [];
  for (let i = 0; i < 9; i++) {
    textBlocks.push(new Text());
  }
  const column = new Column();
  column.blocks = [textBlocks[3], textBlocks[4], textBlocks[5]];
  editor.blocks = [
    textBlocks[0],
    textBlocks[1],
    textBlocks[2],
    column,
    textBlocks[6],
    textBlocks[7],
  ];

  describe("from Editor", () => {
    it("find a block", () => {
      const blocks = getBlocksByRange(
        editor,
        textBlocks[0].id,
        textBlocks[0].id
      );
      expect(blocks).toEqual([textBlocks[0]]);
    });

    it("find some blocks", () => {
      const blocks = getBlocksByRange(
        editor,
        textBlocks[0].id,
        textBlocks[1].id
      );
      expect(blocks).toEqual([textBlocks[0], textBlocks[1]]);
    });

    it("top level and child blocks", () => {
      const blocks = getBlocksByRange(
        editor,
        textBlocks[0].id,
        textBlocks[4].id
      );
      expect(blocks).toEqual([]);
    });

    it("not found", () => {
      const blocks = getBlocksByRange(
        editor,
        textBlocks[8].id,
        textBlocks[8].id
      );
      expect(blocks).toEqual([]);
    });
  });

  describe("from Column", () => {
    it("find a block", () => {
      const blocks = getBlocksByRange(
        column,
        textBlocks[3].id,
        textBlocks[3].id
      );
      expect(blocks).toEqual([textBlocks[3]]);
    });

    it("find some blocks", () => {
      const blocks = getBlocksByRange(
        column,
        textBlocks[4].id,
        textBlocks[5].id
      );
      expect(blocks).toEqual([textBlocks[4], textBlocks[5]]);
    });

    it("not found", () => {
      const blocks = getBlocksByRange(
        column,
        textBlocks[0].id,
        textBlocks[0].id
      );
      expect(blocks).toEqual([]);
    });
  });
});
