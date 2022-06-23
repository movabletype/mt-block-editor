import type { Command } from "../CommandManager";

const command: Command = {
  shortcut: "cmd+k",
  command: "core-insertLink",
  callback: ({
    detail: {
      blocks,
      editorContext: {
        editor: { commandManager },
      },
      nativeEvent,
    },
  }) => {
    nativeEvent.preventDefault();

    commandManager.emit(blocks, "core-insertLink");
  },
};

export default command;
