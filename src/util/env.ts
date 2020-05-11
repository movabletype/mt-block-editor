import { RefObject } from "react";

export const mediaBreakPoint = 991.5;

const _isIos = /ip(hone|(o|a)d)/i.test(navigator.userAgent);
export function isIos(): boolean {
  return _isIos;
}

// FIXME
let _isTouchDevice = /ip(hone|(o|a)d)|android/i.test(navigator.userAgent);
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
