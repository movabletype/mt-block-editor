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

describe("removeControlCharacters", () => {
  test("char", () => {
    expect(removeControlCharacters(`test${String.fromCharCode(0)}`)).toBe(
      "test"
    );
  });
  test("numeric character reference : Dec", async () => {
    expect(removeControlCharacters(`test&#0;`)).toBe("test");
  });
  test("numeric character reference : Dec with prefix 0", async () => {
    expect(removeControlCharacters(`test&#0000;`)).toBe("test");
  });
  test("numeric character reference : Hex", async () => {
    expect(removeControlCharacters(`test&#x0;`)).toBe("test");
  });
  test("numeric character reference : Hex with prefix 0", async () => {
    expect(removeControlCharacters(`test&#x0000;`)).toBe("test");
  });
});

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

  describe("remove control chars", () => {
    describe.each`
      input   | name
      ${0x00} | ${"NUL"}
      ${0x01} | ${"SOH"}
      ${0x02} | ${"STX"}
      ${0x03} | ${"ETX"}
      ${0x04} | ${"EOT"}
      ${0x05} | ${"ENQ"}
      ${0x06} | ${"ACK"}
      ${0x07} | ${"BEL"}
      ${0x08} | ${"BS"}
      ${0x0b} | ${"VT"}
      ${0x0c} | ${"FF"}
      ${0x0e} | ${"SO"}
      ${0x0f} | ${"SI"}
      ${0x10} | ${"DLE"}
      ${0x11} | ${"DC1"}
      ${0x12} | ${"DC2"}
      ${0x13} | ${"DC3"}
      ${0x14} | ${"DC4"}
      ${0x15} | ${"NAK"}
      ${0x16} | ${"SYN"}
      ${0x17} | ${"ETB"}
      ${0x18} | ${"CAN"}
      ${0x19} | ${"EM"}
      ${0x1a} | ${"SUB"}
      ${0x1b} | ${"ESC"}
      ${0x1c} | ${"FS"}
      ${0x1d} | ${"GS"}
      ${0x1e} | ${"RS"}
      ${0x1f} | ${"US"}
    `("Should remove $name", ({ input }) => {
      test("char", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb -->test${String.fromCharCode(input)}<!-- /mt-beb -->`
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
      test("numeric character reference : Dec", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb m='{"className":"test&#${input};"}' -->test<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];
        expect(block).toBeInstanceOf(Text);

        return block
          .serialize({
            editor: mockEditor,
            external: false,
          })
          .then((str) => {
            expect(str).toBe(
              `<!-- mt-beb m='{"className":"test"}' -->test<!-- /mt-beb -->`
            );
          });
      });
      test("numeric character reference : Dec with prefix 0", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb m='{"className":"test&#00${input};"}' -->test<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];
        expect(block).toBeInstanceOf(Text);

        return block
          .serialize({
            editor: mockEditor,
            external: false,
          })
          .then((str) => {
            expect(str).toBe(
              `<!-- mt-beb m='{"className":"test"}' -->test<!-- /mt-beb -->`
            );
          });
      });
      test("numeric character reference : Hex", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb m='{"className":"test&#x${input.toString(
              16
            )};"}' -->test<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];
        expect(block).toBeInstanceOf(Text);

        return block
          .serialize({
            editor: mockEditor,
            external: false,
          })
          .then((str) => {
            expect(str).toBe(
              `<!-- mt-beb m='{"className":"test"}' -->test<!-- /mt-beb -->`
            );
          });
      });
      test("numeric character reference : Hex with prefix 0", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb m='{"className":"test&#x0${input.toString(
              16
            )};"}' -->test<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];
        expect(block).toBeInstanceOf(Text);

        return block
          .serialize({
            editor: mockEditor,
            external: false,
          })
          .then((str) => {
            expect(str).toBe(
              `<!-- mt-beb m='{"className":"test"}' -->test<!-- /mt-beb -->`
            );
          });
      });
    });
  });

  describe("preserve some control chars", () => {
    describe.each`
      input   | name
      ${0x09} | ${"HT"}
      ${0x0a} | ${"LF"}
      ${0x0d} | ${"CR"}
      ${0x20} | ${"SPACE"}
    `("Should not escape $name", ({ input, name }) => {
      test("char", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb -->test${String.fromCharCode(input)}<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];
        expect(block).toBeInstanceOf(Text);

        return block
          .serialize({
            editor: mockEditor,
            external: false,
          })
          .then((str) => {
            if (name === "CR") {
              expect(str).toMatch(/test/);
              return;
            }

            expect(str).toBe(
              `<!-- mt-beb -->test${String.fromCharCode(input)}<!-- /mt-beb -->`
            );
          });
      });
      test("numeric character reference : Dec", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb t='core-html' h='test&#${input};' -->content<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];

        if (name === "CR") {
          expect(block.htmlString()).toMatch(/test/);
          return;
        }
        expect(block.htmlString()).toBe(`test${String.fromCharCode(input)}`);
      });
      test("numeric character reference : Dec with prefix 0", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb t='core-html' h='test&#00${input};' -->content<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];

        if (name === "CR") {
          expect(block.htmlString()).toMatch(/test/);
          return;
        }
        expect(block.htmlString()).toBe(`test${String.fromCharCode(input)}`);
      });
      test("numeric character reference : Hex", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb t='core-html' h='test&#x${input.toString(
              16
            )};' -->content<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];

        if (name === "CR") {
          expect(block.htmlString()).toMatch(/test/);
          return;
        }
        expect(block.htmlString()).toBe(`test${String.fromCharCode(input)}`);
      });
      test("numeric character reference : Hex with prefix 0", async () => {
        const blocks = await parseContent(
          preParseContent(
            `<!-- mt-beb t='core-html' h='test&#x00${input.toString(
              16
            )};' -->content<!-- /mt-beb -->`
          ),
          new BlockFactory(),
          new ParserContext()
        );

        const block = blocks[0];

        if (name === "CR") {
          expect(block.htmlString()).toMatch(/test/);
          return;
        }
        expect(block.htmlString()).toBe(`test${String.fromCharCode(input)}`);
      });
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
