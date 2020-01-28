import React from "react";

interface BlockToolbarProps {
  children: ReactNode;
  id?: string;
  className?: string;
  rows?: number;
  hasBorder?: boolean;
  onClick: (ev: Event) => undefined;
}

const BlockToolbar: React.FC<BlockToolbarProps> = props => {
  let className = "block-toolbar";
  if (props.className) {
    className += ` ${props.className}`;
  }
  if (props.rows && props.rows >= 2) {
    className += ` block-toolbar--x${props.rows}`;
  }
  if (props.hasBorder === false) {
    className += " block-toolbar--no-border";
  }

  return (
    <div id={props.id || ""} className={className}>
      {props.children}
    </div>
  );
};

export default BlockToolbar;
