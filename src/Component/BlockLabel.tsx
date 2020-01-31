import { t } from "../i18n";
import React, { ReactNode } from "react";
import Block from "../Block";
import { useEditorContext } from "../Context";

interface EditorProps {
  children: ReactNode;
  block: Block;
}

const BlockLabel: React.FC<EditorProps> = ({
  block,
  children,
}: EditorProps) => {
  const { editor } = useEditorContext();

  return (
    <label>
      <div>
        {editor.opts.mode === "composition" ? block.label : t("Default Value")}
      </div>
      {children}
    </label>
  );
};

export default BlockLabel;
