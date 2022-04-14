import { t } from "../i18n";
import React, {
  ReactNode,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import Overlay, { TRANSITION_TIMEOUT } from "./Overlay";

interface DialogProps {
  children?: ReactNode;
  open: boolean;
  onClose?: () => void;
  id?: string;
  className?: string;
}
type DialogContextProps = Pick<DialogProps, "onClose">;

const DialogContext = createContext<DialogContextProps>({});
export const Dialog: React.FC<DialogProps> = (props: DialogProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  let className = "mt-be-dialog";
  if (props.className) {
    className += ` ${props.className}`;
  }

  useEffect(() => {
    if (!props.open) {
      return;
    }

    const modalEl = modalRef.current;
    if (!modalEl) {
      return;
    }

    const focusEl = modalEl.querySelector<HTMLElement>(
      `[data-mt-block-editor-focus-default]`
    );
    if (!focusEl) {
      return;
    }

    const activeEl = document.activeElement;
    if (activeEl && activeEl.closest(`.${className}`) === modalEl) {
      return;
    }

    setTimeout(() => {
      focusEl.focus();
    }, TRANSITION_TIMEOUT);
  }, [props.open]);

  return (
    <Overlay open={props.open} onClose={props.onClose}>
      <DialogContext.Provider value={{ onClose: props.onClose }}>
        <div className={className} ref={modalRef}>
          <div className="mt-be-dialog-content">{props.children}</div>
        </div>
      </DialogContext.Provider>
    </Overlay>
  );
};

export const DialogHeader: React.FC = (props: { children?: ReactNode }) => {
  const { onClose = () => null } = useContext(DialogContext);
  return (
    <div className="mt-be-dialog-header">
      {props.children}
      <button
        type="button"
        className="mt-be-dialog-btn-close"
        aria-label={t("Close")}
        onClick={onClose}
      >
        ×
      </button>
    </div>
  );
};

export const DialogBody: React.FC = (props: { children?: ReactNode }) => (
  <div className="mt-be-dialog-body">{props.children}</div>
);

export const DialogFooter: React.FC = (props: { children?: ReactNode }) => (
  <div className="mt-be-dialog-footer">{props.children}</div>
);

export default Dialog;
