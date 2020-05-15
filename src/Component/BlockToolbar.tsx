import React, { useState, ReactNode } from "react";
import { t } from "../i18n";
import { useBlocksContext, useBlockContext } from "../Context";
import BlockCommandPanel from "./BlockCommandPanel";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

interface BlockToolbarProps {
  children?: ReactNode;
  id?: string;
  className?: string;
  rows?: number;
  hasBorder?: boolean;
  fullWidth?: boolean;
}

const BlockToolbar: React.FC<BlockToolbarProps> = (
  props: BlockToolbarProps
) => {
  const blockContext = useBlockContext();
  blockContext.rendered = true;
  const { block, index } = blockContext;

  const { swapBlocks } = useBlocksContext();
  const [showCommandPanel, setCommandPanel] = useState(false);
  function toggleCommandPanel(): void {
    setCommandPanel(!showCommandPanel);
    block.focusEditor();
  }

  let className = "mt-be-block-toolbar--block";
  if (props.className) {
    className += ` ${props.className}`;
  }
  if (props.rows && props.rows >= 2) {
    className += ` mt-be-block-toolbar--x${props.rows}`;
  }
  if (props.hasBorder === false) {
    className += " mt-be-block-toolbar--no-border";
  }

  return (
    <>
      <div id={props.id || ""} className={`mt-be-block-toolbar ${className}`}>
        {props.children}
        <div className="mt-be-block-toolbar-default-items">
          <button
            type="button"
            className="mt-be-btn-up"
            onClick={() => swapBlocks(index, index - 1, true)}
          ></button>
          <button
            type="button"
            className="mt-be-btn-down"
            onClick={() => swapBlocks(index, index + 1, true)}
          ></button>
          <button
            type="button"
            className="mt-be-btn-command"
            onClick={toggleCommandPanel}
          ></button>
        </div>
      </div>
      <BlockCommandPanel in={showCommandPanel}>
        <ul className="mt-be-command-list">
          <li>
            <AddButton index={index} label={t("Insert before")} />
          </li>
          <li>
            <AddButton index={index + 1} label={t("Insert after")} />
          </li>
          <li>
            <RemoveButton
              block={block}
              confirm={true}
              label={t("Remove block")}
            />
          </li>
        </ul>
      </BlockCommandPanel>
    </>
  );
};

export default BlockToolbar;
