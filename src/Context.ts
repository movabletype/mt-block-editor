import { createContext, useContext } from "react";
import Editor from "./Editor";
import Block from "./Block";

interface EditorContextProps {
  editor: Editor;
}
export const EditorContext = createContext<EditorContextProps | null>(null);
export function useEditorContext(): EditorContextProps {
  const c = useContext(EditorContext);
  if (!c) {
    throw Error("EditorContext is null");
  }
  return c;
}

interface BlocksContextProps {
  addBlock: (b: Block, index: number | Block) => void;
  removeBlock: (b: Block) => void;
}
export const BlocksContext = createContext<BlocksContextProps | null>(null);
export function useBlocksContext(): BlocksContextProps {
  const c = useContext(BlocksContext);
  if (!c) {
    throw Error("EditorContext is null");
  }
  return c;
}
