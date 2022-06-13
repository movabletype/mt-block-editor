import platform from "platform";

const labels = {
  mac: {
    cmd: "⌘",
    alt: "⌥",
    ctrl: "⌃",
    shift: "⇧",
  },
  other: {
    cmd: "Ctrl+",
    alt: "Alt+",
    ctrl: "Ctrl+",
    shift: "Shift+",
  },
};

let isMac = false;
let labelMap = labels.other;

export function setPlatform(_platform: typeof platform): void {
  isMac =
    (_platform.os && /^(?:OS X|iOS)$/.test(_platform.os.family || "")) || false;
  labelMap = isMac ? labels.mac : labels.other;
}
setPlatform(platform);

export function toKeyboardShortcutKey(ev: KeyboardEvent): string {
  return `${ev.ctrlKey && isMac ? "ctrl+" : ""}${ev.altKey ? "alt+" : ""}${
    ev.shiftKey ? "shift+" : ""
  }${ev.metaKey || (ev.ctrlKey && !isMac) ? "cmd+" : ""}${ev.key}`;
}

export function toKeyboardShortcutLabel(key: string): string {
  return key.replace(
    /(ctrl|cmd|alt|shift)\+/g,
    (all, key: keyof typeof labelMap) => {
      return labelMap[key] || key;
    }
  );
}
