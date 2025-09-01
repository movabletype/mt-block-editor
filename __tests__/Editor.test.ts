import { newEditor } from "./helper";
import Editor from "../src/Editor";
import Block from "../src/Block";

class TestBlock extends Block {
  public _html = "";
  constructor(init?: Partial<TestBlock>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
  html() {
    return this._html;
  }
}

class Test2Block extends Block {
  public options = "";
  constructor(init?: Partial<Test2Block>) {
    super();
    if (init) {
      Object.assign(this, init);
    }
  }
  public metadata() {
    return this.metadataByOwnKeys();
  }

  html() {
    return this.options.split("\n")[0];
  }
}

describe("serialize()", () => {
  describe("blocks", () => {
    let input: HTMLInputElement;
    let editor: Editor;
    let b1: TestBlock, b2: TestBlock, b3: Test2Block;

    beforeEach(async () => {
      input = document.createElement("input");
      input.id = "input-" + Math.random();
      document.body.appendChild(input);

      editor = newEditor({ id: input.id });

      await new Promise((resolve) => {
        editor.on("initializeBlocks", resolve);
      });

      b1 = new TestBlock({ _html: "<p>1</p>", className: "b1" });
      b2 = new TestBlock({ _html: "<p>2</p>", className: "b2" });
      b3 = new Test2Block({
        className: "b3",
        options: "a\nb\nc",
      });
    });

    afterEach(() => {
      editor.unload();
      input.remove();
    });

    test("simple", async () => {
      editor.addBlock(editor, b1, 0);
      editor.addBlock(editor, b2, 1);
      await editor.serialize();

      expect(input.value).toBe(
        `<!-- mt-beb t="core-context" m='{"1":{"className":"b1"},"2":{"className":"b2"}}' --><!-- /mt-beb --><!-- mt-beb m='1' --><p class="b1">1</p><!-- /mt-beb --><!-- mt-beb m='2' --><p class="b2">2</p><!-- /mt-beb -->`
      );
    });

    test("reuse", async () => {
      editor.addBlock(editor, b1, 0);
      editor.addBlock(editor, b2, 1);
      await editor.serialize();
      b1.className = "b3";
      await editor.serialize();

      expect(input.value).toBe(
        `<!-- mt-beb t="core-context" m='{"1":{"className":"b3"},"2":{"className":"b2"}}' --><!-- /mt-beb --><!-- mt-beb m='1' --><p class="b3">1</p><!-- /mt-beb --><!-- mt-beb m='2' --><p class="b2">2</p><!-- /mt-beb -->`
      );
    });

    test("dedupe", async () => {
      editor.addBlock(editor, b1, 0);
      editor.addBlock(editor, b2, 1);
      await editor.serialize();
      b1.className = "b2";
      await editor.serialize();

      expect(input.value).toBe(
        `<!-- mt-beb t="core-context" m='{"2":{"className":"b2"}}' --><!-- /mt-beb --><!-- mt-beb m='2' --><p class="b2">1</p><!-- /mt-beb --><!-- mt-beb m='2' --><p class="b2">2</p><!-- /mt-beb -->`
      );
    });

    test("increment", async () => {
      editor.addBlock(editor, b1, 0);
      editor.addBlock(editor, b2, 1);
      await editor.serialize();
      b1.className = "b2";
      await editor.serialize();
      b1.className = "b3";
      await editor.serialize();

      expect(input.value).toBe(
        `<!-- mt-beb t="core-context" m='{"2":{"className":"b2"},"3":{"className":"b3"}}' --><!-- /mt-beb --><!-- mt-beb m='3' --><p class="b3">1</p><!-- /mt-beb --><!-- mt-beb m='2' --><p class="b2">2</p><!-- /mt-beb -->`
      );
    });

    describe("metaSetup and meta", () => {
      test("simple", async () => {
        editor.addBlock(editor, b3, 0);
        await editor.serialize();

        expect(input.value).toBe(
          `<!-- mt-beb t="core-context" m='{"1":{"className":"b3"},"2":{"options":"a\\nb\\nc"}}' --><!-- /mt-beb --><!-- mt-beb m='1,2' -->a<!-- /mt-beb -->`
        );
      });

      test("reuse", async () => {
        editor.addBlock(editor, b3, 0);
        await editor.serialize();
        b3.className = "b4";
        await editor.serialize();

        expect(input.value).toBe(
          `<!-- mt-beb t="core-context" m='{"1":{"className":"b4"},"2":{"options":"a\\nb\\nc"}}' --><!-- /mt-beb --><!-- mt-beb m='1,2' -->a<!-- /mt-beb -->`
        );
      });

      test("dedupe", async () => {
        editor.addBlock(editor, b2, 0);
        editor.addBlock(editor, b3, 1);
        await editor.serialize();
        b3.className = "b2";
        await editor.serialize();

        expect(input.value).toBe(
          `<!-- mt-beb t="core-context" m='{"1":{"className":"b2"},"3":{"options":"a\\nb\\nc"}}' --><!-- /mt-beb --><!-- mt-beb m='1' --><p class="b2">2</p><!-- /mt-beb --><!-- mt-beb m='1,3' -->a<!-- /mt-beb -->`
        );
      });

      test("dedupe", async () => {
        editor.addBlock(editor, b2, 0);
        editor.addBlock(editor, b3, 1);
        await editor.serialize();
        b3.className = "b2";
        await editor.serialize();
        b3.className = "b4";
        await editor.serialize();

        expect(input.value).toBe(
          `<!-- mt-beb t="core-context" m='{"1":{"className":"b2"},"3":{"options":"a\\nb\\nc"},"4":{"className":"b4"}}' --><!-- /mt-beb --><!-- mt-beb m='1' --><p class="b2">2</p><!-- /mt-beb --><!-- mt-beb m='4,3' -->a<!-- /mt-beb -->`
        );
      });
    });
  });

  describe("reserialize", () => {
    const input = document.createElement("input");
    input.id = "input-" + Math.random();
    document.body.appendChild(input);

    async function reserialize(str: string): Promise<string> {
      input.value = str;

      const editor = newEditor({ id: input.id });

      await new Promise((resolve) => {
        editor.on("initializeBlocks", resolve);
      });
      await editor.serialize();

      editor.unload();

      return input.value;
    }

    test("simple", async () => {
      const res = await reserialize(`<!-- mt-beb -->test<!-- /mt-beb -->`);
      expect(res).toBe(`<!-- mt-beb -->test<!-- /mt-beb -->`);
    });

    test("meta", async () => {
      const res = await reserialize(
        `<!-- mt-beb m='{"label":"Test Label","helpText":"Test Help","className":"Test Class"}' -->test<!-- /mt-beb -->`
      );
      expect(res).toBe(
        `<!-- mt-beb t="core-context" m='{"1":{"label":"Test Label","helpText":"Test Help","className":"Test Class"}}' --><!-- /mt-beb --><!-- mt-beb m='1' -->test<!-- /mt-beb -->`
      );
    });

    test("deep meta", async () => {
      const res = await reserialize(
        `<!-- mt-beb t="core-columns" m='{"className":"a"}' --><div class="mt-be-columns a" style="display: flex"><!-- mt-beb t="core-column" m='{"className":"b"}' --><div class='mt-be-column b'><!-- mt-beb m='{"label":"c","helpText":"e","className":"f"}' --><p class="f">g</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='{"className":"c"}' --><div class='mt-be-column c'><!-- mt-beb m='{"label":"h","helpText":"i","className":"j"}' --><p class="j">k</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );
      expect(res).toBe(
        `<!-- mt-beb t="core-context" m='{"1":{"className":"a"},"2":{"className":"b"},"3":{"label":"c","helpText":"e","className":"f"},"4":{"className":"c"},"5":{"label":"h","helpText":"i","className":"j"}}' --><!-- /mt-beb --><!-- mt-beb t="core-columns" m='1' --><div class="mt-be-columns a" style="display: flex"><!-- mt-beb t="core-column" m='2' --><div class='mt-be-column b'><!-- mt-beb m='3' --><p class="f">g</p><!-- /mt-beb --></div><!-- /mt-beb --><!-- mt-beb t="core-column" m='4' --><div class='mt-be-column c'><!-- mt-beb m='5' --><p class="j">k</p><!-- /mt-beb --></div><!-- /mt-beb --></div><!-- /mt-beb -->`
      );
    });
  });

  describe("race condition", () => {
    test("serialize before initialization", async () => {
      const value = "<!-- mt-beb -->test<!-- /mt-beb -->";

      const input = document.createElement("input");
      input.id = "input-" + Math.random();
      input.value = value;
      document.body.appendChild(input);

      const editor = newEditor({ id: input.id });
      await editor.serialize();
      editor.unload();

      expect(input.value).toBe(value);
    });
  });
});
