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
  condition: async () =>
    (
      await navigator.permissions
        .query({
          name: "clipboard-read" as PermissionName,
        })
        .catch(() => ({
          state: "denied", // fall back to "denied"
        }))
    ).state !== "denied",
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

    if (
      !(
        (nativeEvent && nativeEvent instanceof ClipboardEvent) ||
        typeof navigator.clipboard.read === "function"
      )
    ) {
      return;
    }

    const html =
      (nativeEvent
        ? await (async () => {
            const clipboardItems =
              (nativeEvent as ClipboardEvent).clipboardData?.items || [];
            for (const clipboardItem of clipboardItems) {
              if (
                clipboardItem.type === "text/plain" ||
                clipboardItem.type === "text/html"
              ) {
                return new Promise<string>((resolve) =>
                  clipboardItem.getAsString(resolve)
                );
              }
            }
          })()
        : await (async () => {
            const clipboardItems = await navigator.clipboard.read();
            for (const clipboardItem of clipboardItems) {
              const types = clipboardItem.types;
              if (types.includes("text/html")) {
                return await (await clipboardItem.getType("text/html")).text();
              }

              for (const type of types) {
                const blob = await clipboardItem.getType(type);
                // we can now use blob here
                return blob.text();
              }
            }
          })()) || "";

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
