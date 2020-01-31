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
      {editor.opts.mode === "composition" ? (
        <>
          <div className="mt-block-editor-label-block">{block.label}</div>
          <div className="mt-block-editor-help-block">{block.helpText}</div>
        </>
      ) : (
        <div>{t("Default Value")}</div>
      )}
      {children}
    </label>
  );
};

export default BlockLabel;
