import platform from "platform";
import {
  setPlatform,
  toKeyboardShortcutKey,
  toKeyboardShortcutLabel,
} from "../../src/util/keyboardShortcut";

describe("toKeyboardShortcutKey()", () => {
  it("mac", () => {
    setPlatform(
      platform.parse(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7.2; en; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.52"
      )
    );
    expect(
      toKeyboardShortcutKey(new KeyboardEvent("keydown", { key: "a" }))
    ).toBe("a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", { key: "a", ctrlKey: true })
      )
    ).toBe("ctrl+a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", { key: "a", ctrlKey: true, altKey: true })
      )
    ).toBe("ctrl+alt+a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", {
          key: "a",
          ctrlKey: true,
          altKey: true,
          shiftKey: true,
        })
      )
    ).toBe("ctrl+alt+shift+a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", {
          key: "a",
          ctrlKey: true,
          altKey: true,
          shiftKey: true,
          metaKey: true,
        })
      )
    ).toBe("ctrl+alt+shift+cmd+a");
  });
  it("other", () => {
    setPlatform(
      platform.parse(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4501.0 Safari/537.36 Edg/91.0.866.0"
      )
    );
    expect(
      toKeyboardShortcutKey(new KeyboardEvent("keydown", { key: "a" }))
    ).toBe("a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", { key: "a", ctrlKey: true })
      )
    ).toBe("cmd+a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", { key: "a", ctrlKey: true, altKey: true })
      )
    ).toBe("alt+cmd+a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", {
          key: "a",
          ctrlKey: true,
          altKey: true,
          shiftKey: true,
        })
      )
    ).toBe("alt+shift+cmd+a");
    expect(
      toKeyboardShortcutKey(
        new KeyboardEvent("keydown", {
          key: "a",
          ctrlKey: true,
          altKey: true,
          shiftKey: true,
          metaKey: true,
        })
      )
    ).toBe("alt+shift+cmd+a");
  });
});

describe("toKeyboardShortcutLabel()", () => {
  it("mac", () => {
    setPlatform(
      platform.parse(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7.2; en; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.52"
      )
    );
    expect(toKeyboardShortcutLabel("cmd+c")).toBe("⌘c");
    expect(toKeyboardShortcutLabel("shift+cmd+c")).toBe("⇧⌘c");
    expect(toKeyboardShortcutLabel("alt+shift+cmd+c")).toBe("⌥⇧⌘c");
    expect(toKeyboardShortcutLabel("ctrl+alt+shift+cmd+c")).toBe("⌃⌥⇧⌘c");
  });

  it("other", () => {
    setPlatform(
      platform.parse(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4501.0 Safari/537.36 Edg/91.0.866.0"
      )
    );
    expect(toKeyboardShortcutLabel("cmd+c")).toBe("Ctrl+c");
    expect(toKeyboardShortcutLabel("shift+cmd+c")).toBe("Shift+Ctrl+c");
    expect(toKeyboardShortcutLabel("alt+shift+cmd+c")).toBe("Alt+Shift+Ctrl+c");
    expect(toKeyboardShortcutLabel("ctrl+alt+shift+c")).toBe(
      "Ctrl+Alt+Shift+c"
    );
  });
});
