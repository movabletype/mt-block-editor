import { t } from "../i18n";
import icon from "../img/paste.svg";
import type { Command } from "../CommandManager";
import { parseContent, preParseContent, ParserContext } from "../util";

const command: Command = {
  get label() {
    return t("Paste");
  },
  icon,
  shortcut: "cmd+v",
  command: "core-pasteBlock",
  condition: async () => typeof navigator.clipboard?.read === "function",
  callback: async ({
    detail: {
      blocks,
      editorContext: { editor, setFocusedIds },
      nativeEvent,
    },
  }) => {
    if (blocks.length === 0) {
      return;
    }

    // Always ignore calls from keyboard shortcuts.
    // ClipboardEvent will be fired next, and it will be handled there.
    if (
      nativeEvent instanceof KeyboardEvent &&
      nativeEvent.target instanceof HTMLElement &&
      nativeEvent.target.closest("[data-mt-block-editor-block-id]")
    ) {
      return;
    }

    if (
      !(
        nativeEvent instanceof ClipboardEvent ||
        typeof navigator.clipboard.read === "function"
      )
    ) {
      return;
    }

    let html = "";
    if (nativeEvent instanceof ClipboardEvent) {
      const clipboardItems = nativeEvent.clipboardData?.items || [];
      for (const clipboardItem of clipboardItems) {
        if (
          clipboardItem.type === "text/plain" ||
          clipboardItem.type === "text/html"
        ) {
          html = nativeEvent.clipboardData?.getData(clipboardItem.type) || "";
        }
      }

      if (!html.match(/<!-- mt-beb .*? \/mt-beb -->$/)) {
        // Prefer browser default behavior
        return;
      }
    } else {
      for (const clipboardItem of await navigator.clipboard.read()) {
        const types = clipboardItem.types;
        if (types.includes("text/html")) {
          html = await (await clipboardItem.getType("text/html")).text();
          break;
        }

        for (const type of types) {
          const blob = await clipboardItem.getType(type);
          // we can now use blob here
          html = await blob.text();
          break;
        }
      }
    }

    if (html === "") {
      return;
    }

    nativeEvent.preventDefault();

    const newBlocks = await parseContent(
      preParseContent(html),
      editor.factory,
      new ParserContext(),
      "core-text"
    );

    if (newBlocks.length === 0) {
      return;
    }

    const index = editor.blocks.findIndex(
      (b) => b.id === blocks[blocks.length - 1].id
    );

    editor.editManager.beginGrouping();
    for (const newBlock of newBlocks.reverse()) {
      editor.addBlock(editor, newBlock, index + 1);
    }
    editor.editManager.endGrouping();
    setFocusedIds([newBlocks[0].id]);

    editor.render();
  },
};

export default command;
