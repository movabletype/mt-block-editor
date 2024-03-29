import React, { useState } from "react";
import { useBlocksContext, useEditorContext } from "../Context";
import type { Command } from "../CommandManager";
import { toKeyboardShortcutLabel } from "../util";
import type Block from "../Block";

type DialogStatus = boolean | undefined; // undefined means dialog is not initialized
interface BlockCommandProps {
  block: Block;
  command: Command;
}

const BlockCommand: React.FC<BlockCommandProps> = ({
  command,
  block,
}: BlockCommandProps) => {
  const [isDialogOpen, setDialogOpen] = useState<DialogStatus>(undefined);
  const blocksContext = useBlocksContext();
  const editorContext = useEditorContext();
  const { editor, getFocusedIds } = editorContext;

  return (
    <button
      type="button"
      data-mt-be-command={command.command}
      className="mt-be-btn-command"
      onClick={(ev) => {
        if (command.dialog) {
          setDialogOpen(true);
        } else {
          editor.commandManager.execute({
            command: command.command,
            blockIds:
              getFocusedIds().length === 0 ? [block.id] : getFocusedIds(),
            editorContext,
            blocksContext,
            event: ev.nativeEvent,
          });
        }
      }}
    >
      <span>
        {command.icon && <img src={command.icon} />}
        {command.label}
      </span>
      <span>
        {command.shortcut && toKeyboardShortcutLabel(command.shortcut)}
      </span>
      {command.dialog && typeof isDialogOpen === "boolean" && (
        <command.dialog open={isDialogOpen} />
      )}
    </button>
  );
};

export default BlockCommand;
