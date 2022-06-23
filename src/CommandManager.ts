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
  condition?: () => boolean | Promise<boolean>;
}

interface BlockEditorCommandEventDetail {
  blocks: Readonly<Block[]>;
  editorContext: EditorContextProps;
  nativeEvent: Event;
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
    callback: (event: BlockEditorCommandEvent) => void
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
  }: {
    event: KeyboardEvent;
    blockIds: string[];
    editorContext: EditorContextProps;
  }): void {
    const key = toKeyboardShortcutKey(event);
    const command = this.editor.keyboardShortcutMap()[key];
    if (command && command.callback) {
      command.callback(
        new BlockEditorCommandEvent({
          blocks: findDescendantBlocks(this.editor, blockIds),
          editorContext,
          nativeEvent: event,
        })
      );
    }
  }

  public execute({
    command,
    blockIds,
    editorContext,
    nativeEvent,
  }: {
    command: string;
    blockIds: string[];
    editorContext: EditorContextProps;
    nativeEvent: Event;
  }): void {
    CommandManager.allCommands.forEach((c) => {
      if (c.command === command && c.callback) {
        c.callback(
          new BlockEditorCommandEvent({
            blocks: findDescendantBlocks(this.editor, blockIds),
            editorContext,
            nativeEvent,
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
