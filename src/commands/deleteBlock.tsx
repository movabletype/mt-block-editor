import { t } from "../i18n";
import icon from "../img/remove.svg";
import type { Command } from "../CommandManager";

const command: Command = {
  get label() {
    return t("Delete");
  },
  icon,
  command: "core-deleteBlock",
  callback: async ({
    detail: {
      blocks,
      editorContext: { editor },
    },
  }) => {
    editor.editManager.beginGrouping();
    blocks.forEach((block) => editor.removeBlock(editor, block));
    editor.editManager.endGrouping();

    editor.render();
  },
};

export default command;
