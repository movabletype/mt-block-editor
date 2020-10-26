import Editor from "../src/Editor";

describe("serialize()", () => {
  const input = document.createElement("INPUT");
  input.id = "input-" + Math.random();
  document.body.appendChild(input);

  async function reserialize(str: string): string {
    input.value = str;

    const editor = new Editor({
      id: input.id,
      stylesheets: [],
    });

    await new Promise((resolve) => {
      editor.on("initializeBlocks", resolve);
    });
    await editor.serialize();

    editor.unload();

    return input.value;
  }

  test("simple", async () => {
    const res = await reserialize(
      `<!-- mt-beb -->test<!-- /mt-beb -->`
    );
    expect(res).toBe(
      `<!-- mt-beb -->test<!-- /mt-beb -->`
    );
  });

  test("meta", async () => {
    const res = await reserialize(
      `<!-- mt-beb m='{\"label\":\"Test Label\",\"helpText\":\"Test Help\",\"className\":\"Test Class\"}' -->test<!-- /mt-beb -->`
    );
    expect(res).toBe(
      `<!-- mt-beb t=\"core-context\" m='{\"1\":{\"label\":\"Test Label\",\"helpText\":\"Test Help\",\"className\":\"Test Class\"}}' --><!-- /mt-beb --><!-- mt-beb m='1' -->test<!-- /mt-beb -->`
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
