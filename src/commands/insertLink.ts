import type { Command } from "../CommandManager";

const command: Command = {
  shortcut: "cmd+k",
  command: "core-insertLink",
  callback: ({
      blocks,
      editorContext: {
        editor: { commandManager },
      },
      event,
  }) => {
    event?.preventDefault();

    commandManager.emit(blocks, "core-insertLink");
  },
};

export default command;
