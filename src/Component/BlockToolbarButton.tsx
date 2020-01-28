import React from "react";

interface BlockToolbarButtonProps {
  icon: string;
  label?: string;
  isActive?: boolean;
  onClick: (ev: Event) => undefined;
}

const BlockToolbarButton: React.FC<BlockToolbarButtonProps> = ({
  icon,
  label,
  isActive,
  onClick,
}: BlockToolbarButtonProps) => {
  label = label || "";

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className={`block-toolbar-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={icon} />
    </button>
  );
};

export default BlockToolbarButton;
