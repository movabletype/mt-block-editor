import { t } from "../i18n";
import icon from "../img/paste.svg";
import type { Command } from "../CommandManager";
import { parseContent, preParseContent, ParserContext } from "../util";

const command: Command = {
  get label() {
    return t("Paste");
  },
  icon,
  shortcut: "cmd+v",
  command: "core-pasteBlock",
  callback: async ({
    detail: {
      blocks,
      editorContext: { editor, setFocusedId },
    },
  }) => {
    if (blocks.length === 0) {
      return;
    }

    const html =
      (await (typeof navigator.clipboard.read === "function"
        ? (async () => {
            const clipboardItems = await navigator.clipboard.read();
            for (const clipboardItem of clipboardItems) {
              const types = clipboardItem.types;
              if (types.includes("text/html")) {
                return await (await clipboardItem.getType("text/html")).text();
              }

              for (const type of types) {
                const blob = await clipboardItem.getType(type);
                // we can now use blob here
                return blob.text();
              }
            }
          })()
        : navigator.clipboard.readText())) || "";

    const newBlocks = await parseContent(
      preParseContent(html),
      editor.factory,
      new ParserContext(),
      "core-text"
    );

    const index = editor.blocks.findIndex(
      (b) => b.id === blocks[blocks.length - 1].id
    );

    editor.editManager.beginGrouping();
    for (const newBlock of newBlocks.reverse()) {
      editor.addBlock(editor, newBlock, index + 1);
      setFocusedId(newBlock.id);
    }
    editor.editManager.endGrouping();

    editor.render();
  },
};

export default command;
