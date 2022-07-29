import EventEmitter from "eventemitter3";
import React, { useEffect } from "react";

import type Editor from "./Editor";
import type Block from "./Block";
import type { EditorContextProps, BlocksContextProps } from "./Context";
import { useEditorContext } from "./Context";
import { findDescendantBlocks, toKeyboardShortcutKey } from "./util";
import { DialogProps } from "./Component/Dialog";

interface BlockEditorCommandArgs {
  blocks: Readonly<Block[]>;
  editorContext: EditorContextProps;
  blocksContext: BlocksContextProps;
  event: Event;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra?: any;
}

export interface Command {
  command: string;
  callback?: (args: BlockEditorCommandArgs) => void;
  label?: string;
  icon?: string;
  shortcut?: string;
  dialog?: React.FC<DialogProps>;
  condition?: () => boolean | Promise<boolean>;
}

interface BlockEditorCommandDetail {
  command: string;
  blockIds: Readonly<string[]>;
  editorContext: EditorContextProps;
  blocksContext: BlocksContextProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extra?: any;
}
export class BlockEditorCommandEvent extends CustomEvent<
  BlockEditorCommandDetail
> {
  constructor(detail: BlockEditorCommandDetail) {
    super("mt-block-editor-command", { detail });
  }
}

interface UseCommandsParams {
  block: Block;
  commands: Command[];
}

export default class CommandManager {
  public static allCommands: Command[] = [];
  private static _allContextCommands: Command[] | undefined;
  public editor: Editor;
  private eventEmitters: Map<Block, EventEmitter> = new Map();

  public static registerCommand(command: Command): void {
    CommandManager.allCommands.push(command);
    CommandManager._allContextCommands = undefined;
  }

  public static get allContextCommands(): Command[] {
    return (this._allContextCommands ||= CommandManager.allCommands.filter(
      (c) => !!c.label
    ));
  }

  public constructor(init: Pick<CommandManager, "editor">) {
    this.editor = init.editor;
  }

  public async contextCommands(): Promise<Command[]> {
    return (
      await Promise.all(
        CommandManager.allContextCommands.map(async (c) => {
          return (await c.condition?.()) ?? true ? c : undefined;
        })
      )
    ).filter((c): c is Command => !!c);
  }

  public async commands(): Promise<Command[]> {
    return (
      await Promise.all(
        CommandManager.allCommands.map(async (c) => {
          return (await c.condition?.()) ?? true ? c : undefined;
        })
      )
    ).filter((c): c is Command => !!c);
  }

  public on(
    block: Block,
    command: string,
    callback: (args: BlockEditorCommandArgs) => void
  ): void {
    let emitter = this.eventEmitters.get(block);
    if (!emitter) {
      this.eventEmitters.set(block, (emitter = new EventEmitter()));
    }
    emitter.on(command, callback);
  }

  public removeAllListenersOfBlock(block: Block): void {
    this.eventEmitters.get(block)?.removeAllListeners();
    this.eventEmitters.delete(block);
  }

  public emit(
    blocks: Readonly<Block[]>,
    command: string,
    ...args: unknown[]
  ): void {
    for (let i = 0, len = blocks.length; i < len; i++) {
      this.eventEmitters.get(blocks[i])?.emit(command, ...args);
    }
  }

  public dispatchKeydownEvent({
    event,
    blockIds,
    editorContext,
    blocksContext,
  }: {
    event: KeyboardEvent;
    blockIds: string[];
    editorContext: EditorContextProps;
    blocksContext: BlocksContextProps;
  }): void {
    const key = toKeyboardShortcutKey(event);
    const command = this.editor.keyboardShortcutMap()[key];
    if (command && command.callback) {
      command.callback({
        blocks: findDescendantBlocks(this.editor, blockIds),
        editorContext,
        blocksContext,
        event: event,
      });
    }
  }

  public execute({
    command,
    blockIds,
    editorContext,
    blocksContext,
    event,
  }: {
    command: string;
    blockIds: Readonly<string[]>;
    editorContext: EditorContextProps;
    blocksContext: BlocksContextProps;
    event: Event;
  }): void {
    CommandManager.allCommands.forEach((c) => {
      if (c.command === command && c.callback) {
        c.callback({
          blocks: findDescendantBlocks(this.editor, blockIds),
          editorContext,
          blocksContext,
          event,
        });
      }
    });
  }
}

export function useCommands(
  { block, commands }: UseCommandsParams,
  deps?: React.DependencyList | undefined
): void {
  const {
    editor: { commandManager },
  } = useEditorContext();

  useEffect(() => {
    for (const command of commands) {
      if (command.callback) {
        commandManager.on(block, command.command, command.callback);
      }
    }

    return () => {
      commandManager.removeAllListenersOfBlock(block);
    };
  }, deps);
}
