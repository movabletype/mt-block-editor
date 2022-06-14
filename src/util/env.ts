import platform from "platform";
import { RefObject } from "react";

export const mediaBreakPoint = 991.5;

const _isIos = platform.os?.family === "iOS";
export function isIos(): boolean {
  return _isIos;
}

// FIXME
let _isTouchDevice = ["iOS", "Android", "Windows Phone"].includes(
  platform.os?.family || ""
);
document.addEventListener("touchstart", () => {
  _isTouchDevice = true;
});
export function isTouchDevice(): boolean {
  return _isTouchDevice;
}

export function focusIfIos(ref: RefObject<HTMLElement>): void {
  if (!isIos()) {
    return;
  }

  if (ref.current === null) {
    return;
  }

  ref.current.focus();
}
