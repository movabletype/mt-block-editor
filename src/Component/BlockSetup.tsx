import React, { ReactNode } from "react";
import Block from "../Block";
import EditorMode from "./EditorMode";
import { blockProperty } from "../decorator";

interface EditorProps {
  children: ReactNode;
  block: Block;
}

const BlockSetup: React.FC<EditorProps> = blockProperty(
  ({ children }: EditorProps) => (
    <EditorMode mode="setup">
      <div>{children}</div>
    </EditorMode>
  )
);

export default BlockSetup;
