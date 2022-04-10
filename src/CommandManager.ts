import EventEmitter from "eventemitter3";
import { useEffect } from "react";

import Editor from "./Editor";
import type Block from "./Block";
import { useEditorContext } from "./Context";

interface Command {
  name: string;
  callback: (event: Event) => void;
}

interface UseCommandsParams {
  block: Block;
  commands: Command[];
}

export default class CommandManager {
  public editor: Editor;
  private eventEmitters: Record<string, EventEmitter> = {};

  public constructor(init: Pick<CommandManager, "editor">) {
    this.editor = init.editor;
  }

  public on(
    blockId: string,
    name: string,
    callback: (event: Event) => void
  ): void {
    this.eventEmitters[blockId] ||= new EventEmitter();
    this.eventEmitters[blockId].on(name, callback);
  }

  public removeAllListenersOfBlock(blockId: string): void {
    this.eventEmitters[blockId]?.removeAllListeners();
    delete this.eventEmitters[blockId];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public emit(blockId: string, name: string, ...args: any[]): void {
    this.eventEmitters[blockId]?.emit(name, ...args);
  }

  public dispatchKeydownEvent({
    event,
    focusedBlockId,
  }: {
    event: KeyboardEvent;
    focusedBlockId: string;
  }): void {
    if (
      event.key === "k" &&
      (event.ctrlKey || event.metaKey) &&
      !event.shiftKey
    ) {
      event.preventDefault();
      this.editor.commandManager.emit(focusedBlockId, "core-insertLink");
    }
  }
}

export function useCommands({ block, commands }: UseCommandsParams): void {
  const {
    editor: { commandManager: CommandManager },
  } = useEditorContext();

  useEffect(() => {
    for (const command of commands) {
      CommandManager.on(block.id, command.name, command.callback);
    }

    return () => {
      CommandManager.removeAllListenersOfBlock(block.id);
    };
  });
}
