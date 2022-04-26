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

  useEffect(() => {
    Object.assign(portal.style, PORTAL_STYLE);
    portal.classList.add("mt-block-editor");
    document.body.appendChild(portal);
    return () => portal.remove();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeydown(ev: KeyboardEvent): void {
      if (ev.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open]);

  return createPortal(
    <CSSTransition
      in={open}
      onEnter={() =>
        document.body.classList.add("mt-block-editor-overlay-open")
      }
      onExit={() =>
        document.body.classList.remove("mt-block-editor-overlay-open")
      }
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
