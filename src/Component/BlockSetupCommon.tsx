import React from "react";
import { t } from "../i18n";
import Block from "../Block";
import BlockSetup from "./BlockSetup";
import { blockProperty } from "../decorator";

interface EditorProps {
  block: Block;
  keys?: string[];
}

const labelMap: { [key: string]: string } = {
  label: "Label",
  helpText: "Help Text",
  className: "Class Name",
};

const BlockSetupCommon: React.FC<EditorProps> = blockProperty(
  ({ block, keys = ["label", "helpText", "className"] }: EditorProps) => (
    <>
      {keys.map((k) => (
        <BlockSetup block={block} key={k}>
          <label
            className="mt-be-label-name"
            style={{ display: "inline-block", width: "100%" }}
          >
            <div>{t(labelMap[k])}</div>
            {k === "helpText" ? (
              <textarea
                name={k}
                className="mt-be-input mt-be-input--full-width"
                data-min-rows="1"
              />
            ) : (
              <input
                type="text"
                name={k}
                className="mt-be-input mt-be-input--full-width"
              />
            )}
          </label>
        </BlockSetup>
      ))}
    </>
  )
);

export default BlockSetupCommon;
