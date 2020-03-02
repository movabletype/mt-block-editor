import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

interface BlockConfigPanelProps {
  children?: ReactNode;
  in: boolean;
  id?: string;
  className?: string;
}

const PANEL_CLASS_NAME = "block-config-panel";

const BlockConfigPanel: React.FC<BlockConfigPanelProps> = (
  props: BlockConfigPanelProps
) => {
  let className = PANEL_CLASS_NAME;
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <CSSTransition
      timeout={100}
      in={props.in}
      unmountOnExit
      classNames={PANEL_CLASS_NAME}
    >
      <div id={props.id || ""} className={className}>
        {props.children}
      </div>
    </CSSTransition>
  );
};

export default BlockConfigPanel;
