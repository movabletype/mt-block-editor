import React from "react";
import { t } from "../i18n";
import Block from "../Block";
import BlockSetup from "./BlockSetup";
import { useEditorUtil } from "../hooks";

interface EditorProps {
  block: Block;
  keys?: string[];
}

const labelMap: { [key: string]: string } = {
  label: "Label",
  helpText: "Help Text",
  className: "Class Name",
};

const BlockSetupCommonInternal: React.FC<EditorProps> = ({
  block,
  keys = ["label", "helpText", "className"],
}: EditorProps) => {
  return (
    <>
      {keys.map(k => (
        <BlockSetup block={block} key={k}>
          <label className="label-name" style={ { display: "inline-block", width: "100%" }}>
            <div>{t(labelMap[k])}</div>
            <input type="text" name={k} style={{ width: "100%" }} />
          </label>
        </BlockSetup>
      ))}
    </>
  );
};

const BlockSetupCommon: React.FC<EditorProps> = (props: EditorProps) =>
  useEditorUtil(BlockSetupCommonInternal, props);

export default BlockSetupCommon;
