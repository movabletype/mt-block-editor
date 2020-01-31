import React, { ReactNode } from "react";
import Block from "../Block";
import EditorMode from "./EditorMode";
import { useEditorUtil } from "../hooks";

interface EditorProps {
  children: ReactNode;
  block: Block;
}

const BlockSetupInternal: React.FC<EditorProps> = ({
  children,
}: EditorProps) => {
  return (
    <EditorMode mode="setup">
      <div>{children}</div>
    </EditorMode>
  );
};

const BlockSetup: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(BlockSetupInternal, props);

export default BlockSetup;
