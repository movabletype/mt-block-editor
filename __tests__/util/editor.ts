import BlockFactory from "../../src/BlockFactory";
import ParserContext from "../../src/util/ParserContext";
import { parseContent, preParseContent } from "../../src/util/editor";

import Text from "../../src/Block/Text";

function serializeMeta(block) {
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
        },
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
        },
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
        },
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
        },
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{\"label\":\"Test Label\"}' -->test<!-- /mt-beb -->`
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
        },
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
        },
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{\"label\":\"Test Label\"}' -->test<!-- /mt-beb -->`
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
        },
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
        },
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{\"label\":\"Test Label\",\"helpText\":\"Test Help\"}' -->test<!-- /mt-beb -->`
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
        },
      })
      .then((str) => {
        expect(str).toBe(
          `<!-- mt-beb m='{\"label\":\"Test Label\",\"helpText\":\"Test Help\",\"className\":\"Test Class\"}' -->test<!-- /mt-beb -->`
        );
      });
  });
});
