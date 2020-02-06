import React, { ReactNode } from "react";

interface BlockConfigPanelProps {
  children?: ReactNode;
  id?: string;
  className?: string;
}

const BlockConfigPanel: React.FC<BlockConfigPanelProps> = (
  props: BlockConfigPanelProps
) => {
  let className = "block-config-panel";
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div id={props.id || ""} className={className}>
      {props.children}
    </div>
  );
};

export default BlockConfigPanel;
