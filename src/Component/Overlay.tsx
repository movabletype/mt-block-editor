import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const OVERLAY_CLASS_NAME = "mt-be-overlay";
const PORTAL_STYLE = { position: "relative", zIndex: 1000 };
export const TRANSITION_TIMEOUT = 300;

interface OverlayProps {
  open: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({
  open,
  onClose = () => null,
  children,
}: OverlayProps) => {
  const [portal] = useState<HTMLDivElement>(() =>
    document.createElement("div")
  );

  // prepare portal element
  useEffect(() => {
    document.body.appendChild(portal);
    return () => portal.remove();
  });

  // scroll lock
  useEffect(() => {
    const style = document.documentElement.style;
    style.overflow = "hidden";
    return () => {
      style.overflow = "";
    };
  });

  // cancel by escape
  useEffect(() => {
    function onEsc(e: KeyboardEvent): void {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  });

  Object.assign(portal.style, PORTAL_STYLE);
  portal.classList.add("mt-block-editor");

  return createPortal(
    <CSSTransition
      in={open}
      classNames={OVERLAY_CLASS_NAME}
      unmountOnExit
      timeout={TRANSITION_TIMEOUT}
    >
      <div className={OVERLAY_CLASS_NAME}>{children}</div>
    </CSSTransition>,
    portal
  );
};

export default Overlay;
