import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";

// FIXME
export const DndBackend = /ip(hone|(o|a)d)|android/i.test(navigator.userAgent)
  ? TouchBackend
  : HTML5Backend;

export const featurePreview = DndBackend === HTML5Backend;
