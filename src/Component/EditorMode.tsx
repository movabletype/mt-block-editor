import React, { ReactNode } from "react";
import { useEditorContext } from "../Context";

interface EditorModeProps {
  children?: ReactNode;
  mode: string | string[];
}

const EditorMode: React.FC<EditorModeProps> = ({
  children,
  mode,
}: EditorModeProps) => {
  if (typeof mode === "string") {
    mode = [mode];
  }

  const { editor } = useEditorContext();

  if (!mode.find((m) => m === editor.opts.mode)) {
    return null;
  }

  return <>{children} </>;
};

export default EditorMode;
