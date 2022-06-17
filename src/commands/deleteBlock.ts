import { t } from "../i18n";
import { isTouchDevice } from "../util";
import icon from "../img/remove.svg";
import type { Command } from "../CommandManager";

const command: Command = {
  get label() {
    return t("Delete");
  },
  icon,
  command: "core-deleteBlock",
  callback: ({
    detail: {
      blocks,
      editorContext: { editor },
    },
  }) => {
    if (isTouchDevice()) {
      if (!window.confirm(t("Are you sure you want to remove the block?"))) {
        return;
      }
    }

    editor.editManager.beginGrouping();
    blocks.forEach((block) => editor.removeBlock(editor, block));
    editor.editManager.endGrouping();

    editor.render();
  },
};

export default command;
