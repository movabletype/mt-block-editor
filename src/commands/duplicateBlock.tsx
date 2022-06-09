import { t } from "../i18n";
import icon from "../img/duplicate.svg";
import type { Command } from "../CommandManager";
import { parseContent, preParseContent, ParserContext } from "../util";

const command: Command = {
  get label() {
    return t("Duplicate");
  },
  icon,
  shortcut: "cmd+d",
  command: "core-duplicateBlock",
  callback: async ({
    detail: {
      blocks,
      editorContext: { editor, setFocusedId },
    },
  }) => {
    if (blocks.length === 0) {
      return;
    }

    const html = (
      await Promise.all(blocks.map((block) => block.serialize({ editor })))
    ).join("");

    const newBlocks = await parseContent(
      preParseContent(html),
      editor.factory,
      new ParserContext()
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
