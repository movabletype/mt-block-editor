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

  if (editor.opts.mode === "setup") {
    return (
      <>
        <label className="mt-be-label-name" style={{ display: "block" }}>
          <div>{t("Default Value")}</div>
        </label>
        {children}
      </>
    );
  }

  if (!block.label && !block.helpText) {
    return <>{children}</>;
  }

  return (
    <>
      <label
        className="mt-be-label-name"
        style={{ display: "block" }}
        onClick={() => {
          block.focusEditor();
        }}
      >
        {block.label ? (
          <div className="mt-be-label-block">{block.label}</div>
        ) : null}
        {block.helpText ? (
          <div className="mt-be-help-block">{block.helpText}</div>
        ) : null}
      </label>
      {children}
    </>
  );
};

export default BlockLabel;
