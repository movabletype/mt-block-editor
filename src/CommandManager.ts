import EventEmitter from "eventemitter3";
import { useEffect } from "react";

import Editor from "./Editor";
import type Block from "./Block";
import { useEditorContext } from "./Context";

interface Command {
  command: string;
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
    command: string,
    callback: (event: Event) => void
  ): void {
    this.eventEmitters[blockId] ||= new EventEmitter();
    this.eventEmitters[blockId].on(command, callback);
  }

  public removeAllListenersOfBlock(blockId: string): void {
    this.eventEmitters[blockId]?.removeAllListeners();
    delete this.eventEmitters[blockId];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public emit(blockId: string, command: string, ...args: any[]): void {
    this.eventEmitters[blockId]?.emit(command, ...args);
  }

  public dispatchKeydownEvent({
    event,
    blockId,
  }: {
    event: KeyboardEvent;
    blockId: string;
  }): void {
    if (
      event.key === "k" &&
      (event.ctrlKey || event.metaKey) &&
      !event.shiftKey
    ) {
      event.preventDefault();
      this.emit(blockId, "core-insertLink");
    }
  }
}

export function useCommands(
  { block, commands }: UseCommandsParams,
  deps?: React.DependencyList | undefined
): void {
  const {
    editor: { commandManager: CommandManager },
  } = useEditorContext();

  useEffect(() => {
    for (const command of commands) {
      CommandManager.on(block.id, command.command, command.callback);
    }

    return () => {
      CommandManager.removeAllListenersOfBlock(block.id);
    };
  }, deps);
}
