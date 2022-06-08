import platform from "platform";

const isMac = platform.os && /^(?:OS X|iOS)$/.test(platform.os.family || "");
const labelMap = isMac
  ? {
      cmd: "⌘",
      alt: "⌥",
      ctrl: "⌃",
      shift: "⇧",
    }
  : {
      cmd: "Ctrl+",
      alt: "Alt+",
      ctrl: "Ctrl+",
      shift: "Shift+",
    };

export function toKeyboardShortcutKey(ev: KeyboardEvent): string {
  return `${ev.ctrlKey ? (isMac ? "ctrl+" : "cmd+") : ""}${
    ev.altKey ? "alt+" : ""
  }${ev.shiftKey ? "shift+" : ""}${ev.metaKey ? "cmd+" : ""}${ev.key}`;
}

export function toKeyboardShortcutLabel(key: string): string {
  return key.replace(
    /(ctrl|cmd|alt|shift)\+/g,
    (all, key: keyof typeof labelMap) => {
      return labelMap[key] || key;
    }
  );
}
