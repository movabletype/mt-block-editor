import React from "react";
import { t } from "../i18n";
import Block from "../Block";
import BlockSetup from "./BlockSetup";
import { useEditorUtil } from "../hooks";

interface EditorProps {
  block: Block;
}

const BlockSetupCommonInternal: React.FC<EditorProps> = ({
  block,
}: EditorProps) => {
  return (
    <>
      <BlockSetup block={block}>
        <label>
          <div>{t("Label")}</div>
          <input type="text" name="label" style={{ width: "100%" }} />
        </label>
      </BlockSetup>
      <BlockSetup block={block}>
        <label>
          <div>{t("Help Text")}</div>
          <input type="text" name="helpText" style={{ width: "100%" }} />
        </label>
      </BlockSetup>
      <BlockSetup block={block}>
        <label>
          <div>{t("Class Name")}</div>
          <input type="text" name="className" style={{ width: "100%" }} />
        </label>
      </BlockSetup>
    </>
  );
};

const BlockSetupCommon: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(BlockSetupCommonInternal, props);

export default BlockSetupCommon;
