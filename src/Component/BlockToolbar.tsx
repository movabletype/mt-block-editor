import React, { ReactNode } from "react";
import { useBlockContext } from "../Context";

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
  const { setToolbarProps } = useBlockContext();

  let className = "block-toolbar--block";
  if (props.className) {
    className += ` ${props.className}`;
  }
  if (props.rows && props.rows >= 2) {
    className += ` block-toolbar--x${props.rows}`;
  }
  if (props.hasBorder === false) {
    className += " block-toolbar--no-border";
  }

  setToolbarProps({
    id: props.id || "",
    className: className,
    children: props.children,
  });

  return null;
};

export default BlockToolbar;
