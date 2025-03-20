import React, {
  useState,
  useCallback,
  forwardRef,
  ReactNode,
  MouseEventHandler,
} from "react";
import { t } from "../i18n";
import { useBlocksContext, useBlockContext } from "../Context";
import BlockCommandPanel from "./BlockCommandPanel";
import AddButton from "./AddButton";

interface BlockToolbarProps {
  children?: ReactNode;
  className?: string;
  rows?: number;
  hasBorder?: boolean;
  fullWidth?: boolean;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
}

const BlockToolbar = forwardRef<HTMLDivElement, BlockToolbarProps>(
  (props, ref) => {
    const blockContext = useBlockContext();
    blockContext.rendered = true;
    const { block, index } = blockContext;

    const { swapBlocks } = useBlocksContext();
    const [isCommandPanelShown, setCommandPanelShown] = useState(false);
    const toggleCommandPanelShown = useCallback(() => {
      setCommandPanelShown((prev) => !prev);
      block.focusEditor();
    }, []);

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
    const onMouseDown =
      props.onMouseDown ||
      ((ev) => {
        ev.preventDefault();
      });

    return (
      <>
        <div
          className={`mt-be-block-toolbar ${className}`}
          data-mt-be-toolbar={block.id}
          onMouseDown={onMouseDown}
          ref={ref}
        >
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
              className="mt-be-btn-command-panel"
              onClick={toggleCommandPanelShown}
            ></button>
          </div>
        </div>
        <BlockCommandPanel in={isCommandPanelShown} block={block}>
          <AddButton index={index} label={t("Insert before")} />
          <AddButton index={index + 1} label={t("Insert after")} />
        </BlockCommandPanel>
      </>
    );
  }
);

BlockToolbar.displayName = "BlockToolbar";

export default BlockToolbar;
