import { isTouchDevice } from "../util";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

export const DndBackend = isTouchDevice() ? TouchBackend : HTML5Backend;
export const featurePreview = DndBackend === HTML5Backend;
