import EventEmitter from "eventemitter3";
import React, { useEffect } from "react";

import type Editor from "./Editor";
import type Block from "./Block";
import { useEditorContext, EditorContextProps } from "./Context";
import { findDescendantBlocks, toKeyboardShortcutKey } from "./util";
import { DialogProps } from "./Component/Dialog";

export interface Command {
  command: string;
  callback?: (event: BlockEditorCommandEvent) => void;
  label?: string;
  icon?: string;
  shortcut?: string;
  dialog?: React.FC<DialogProps>;
}

interface BlockEditorCommandEventDetail {
  blocks: Readonly<Block[]>;
  editorContext: EditorContextProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra?: any;
}
export class BlockEditorCommandEvent extends CustomEvent<
  BlockEditorCommandEventDetail
> {
  constructor(detail: BlockEditorCommandEventDetail) {
    super("mt-be-command", { detail });
  }
}

interface UseCommandsParams {
  block: Block;
  commands: Command[];
}

export default class CommandManager {
  public static allCommands: Command[] = [];
  public editor: Editor;
  private eventEmitters: Record<string, EventEmitter> = {};

  public static registerCommand(command: Command): void {
    CommandManager.allCommands.push(command);
  }

  public constructor(init: Pick<CommandManager, "editor">) {
    this.editor = init.editor;
  }

  public commands(): Command[] {
    return CommandManager.allCommands;
  }

  public on(
    blockId: string,
    command: string,
    callback: (event: BlockEditorCommandEvent) => void
  ): void {
    this.eventEmitters[blockId] ||= new EventEmitter();
    this.eventEmitters[blockId].on(command, callback);
  }

  public removeAllListenersOfBlock(blockId: string): void {
    this.eventEmitters[blockId]?.removeAllListeners();
    delete this.eventEmitters[blockId];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public emit(blockIds: string[], command: string, ...args: any[]): void {
    for (let i = 0, len = blockIds.length; i < len; i++) {
      this.eventEmitters[blockIds[i]]?.emit(command, ...args);
    }
  }

  public dispatchKeydownEvent({
    event,
    blockIds,
    editorContext,
  }: {
    event: KeyboardEvent;
    blockIds: string[];
    editorContext: EditorContextProps;
  }): void {
    const key = toKeyboardShortcutKey(event);

    if (key === "cmd+k") {
      event.preventDefault();
      this.emit(blockIds, "core-insertLink");
      return;
    }
    if (key === "cmd+c") {
      const s = window.getSelection();
      if (s && !s.isCollapsed) {
        return;
      }
    }

    for (const command of this.editor.keyboardShortcuts()) {
      if (command.shortcut === key) {
        event.preventDefault();

        command.callback &&
          command.callback(
            new BlockEditorCommandEvent({
              blocks: findDescendantBlocks(this.editor, blockIds),
              editorContext,
            })
          );

        return;
      }
    }
  }

  public execute({
    command,
    blockIds,
    editorContext,
  }: {
    command: string;
    blockIds: string[];
    editorContext: EditorContextProps;
  }): void {
    this.commands().forEach((c) => {
      if (c.command === command && c.callback) {
        c.callback(
          new BlockEditorCommandEvent({
            blocks: findDescendantBlocks(this.editor, blockIds),
            editorContext,
          })
        );
      }
    });
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
      if (command.callback) {
        CommandManager.on(block.id, command.command, command.callback);
      }
    }

    return () => {
      CommandManager.removeAllListenersOfBlock(block.id);
    };
  }, deps);
}
