import { createContext, useContext } from "react";
import Editor from "./Editor";
import Block from "./Block";

interface SetFocusedIdsOptions {
  forceUpdate: boolean;
}

export type SetFocusedIds = (
  ids: string[],
  opts?: SetFocusedIdsOptions
) => void;

export interface EditorContextProps {
  editor: Editor;
  setFocusedIds: SetFocusedIds;
  getFocusedIds: () => string[];
}
export const EditorContext = createContext<EditorContextProps | null>(null);
export function useEditorContext(): EditorContextProps {
  const c = useContext(EditorContext);
  if (!c) {
    throw Error("EditorContext is not initialized");
  }
  return c;
}

export interface BlocksContextProps {
  panelBlockTypes: string[] | null;
  shortcutBlockTypes: string[] | null;
  addBlock: (b: Block, index: number | Block) => void;
  mergeBlock: (b: Block) => void;
  removeBlock: (b: Block) => void;
  swapBlocks: (a: number, b: number, scroll?: boolean) => void;
}
export const BlocksContext = createContext<BlocksContextProps | null>(null);
export function useBlocksContext(): BlocksContextProps {
  const c = useContext(BlocksContext);
  if (!c) {
    throw Error("BlocksContext is not initialized");
  }
  return c;
}

interface BlockContextProps {
  block: Block;
  index: number;
  rendered: boolean;
}
export const BlockContext = createContext<BlockContextProps | null>(null);
export function useBlockContext(): BlockContextProps {
  const c = useContext(BlockContext);
  if (!c) {
    throw Error("BlockContext is not initialized");
  }
  return c;
}
