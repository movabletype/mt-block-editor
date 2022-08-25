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
    blocks,
    editorContext: { editor, setFocusedIds },
    blocksContext: { addBlock },
    event,
  }) => {
    if (blocks.length === 0) {
      return;
    }

    event?.preventDefault();

    const html = (
      await Promise.all(
        blocks.map((block) => block.serialize({ editor, external: true }))
      )
    ).join("");

    const newBlocks = await parseContent(
      preParseContent(html),
      editor.factory,
      new ParserContext()
    );

    editor.editManager.beginGrouping();
    for (const newBlock of newBlocks.reverse()) {
      addBlock(newBlock, blocks[blocks.length - 1]);
    }
    editor.editManager.endGrouping();
    setFocusedIds([newBlocks[0].id]);

    editor.render();
  },
};

export default command;
