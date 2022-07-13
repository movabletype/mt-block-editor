import { t } from "../i18n";
import icon from "../img/paste.svg";
import type { Command } from "../CommandManager";
import type { EditorContextProps } from "../Context";
import { BlockEditorCommandEvent } from "../CommandManager";
import { parseContent, preParseContent, ParserContext } from "../util";

const commandId = "core-pasteBlock";

export class BlockEditorPasteCommandEvent extends BlockEditorCommandEvent {
  constructor({
    blockIds,
    editorContext,
    clipboardData,
  }: {
    blockIds: string[];
    editorContext: EditorContextProps;
    clipboardData: DataTransfer;
  }) {
    super({
      command: commandId,
      blockIds,
      editorContext,
      extra: {
        clipboardData,
      },
    });
  }

  get clipboardData(): DataTransfer {
    return this.detail.extra.clipboardData;
  }
}

const command: Command = {
  get label() {
    return t("Paste");
  },
  icon,
  shortcut: "cmd+v",
  command: commandId,
  condition: async () => typeof navigator.clipboard?.read === "function",
  callback: async ({
    blocks,
    editorContext: { editor, setFocusedIds },
    event,
  }) => {
    if (blocks.length === 0) {
      return;
    }

    // Always ignore calls from keyboard shortcuts.
    // ClipboardEvent will be fired next, and it will be handled there.
    if (
      event instanceof KeyboardEvent &&
      event.target instanceof HTMLElement &&
      event.target.closest(
        "[data-mt-block-editor-block-id], [data-mt-be-toolbar]"
      )
    ) {
      return;
    }

    // Process on TinyMCE
    if (
      event?.target instanceof HTMLElement &&
      event.target.id === "mcepastebin"
    ) {
      return;
    }

    if (
      !(
        event instanceof ClipboardEvent ||
        event instanceof BlockEditorPasteCommandEvent ||
        typeof navigator.clipboard.read === "function"
      )
    ) {
      return;
    }

    let html = "";
    if (
      event instanceof ClipboardEvent ||
      event instanceof BlockEditorPasteCommandEvent
    ) {
      const clipboardItems = event.clipboardData?.items || [];
      for (const clipboardItem of clipboardItems) {
        if (
          clipboardItem.type === "text/plain" ||
          clipboardItem.type === "text/html"
        ) {
          html = event.clipboardData?.getData(clipboardItem.type) || "";
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

    event?.preventDefault();

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
