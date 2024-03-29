import { t } from "../i18n";
import icon from "../img/copy.svg";
import type { Command } from "../CommandManager";
import { tinymceFocus } from "../Block/Text/util";
import Text from "../Block/Text";
import Table from "../Block/Table";

const isClipboardAPIAvailable: () => boolean = () =>
  typeof navigator.clipboard?.write === "function" ||
  typeof navigator.clipboard?.writeText === "function";
const command: Command = {
  get label() {
    return t("Copy");
  },
  icon,
  shortcut: "cmd+c",
  command: "core-copyBlock",
  condition: isClipboardAPIAvailable,
  callback: async ({ blocks, editorContext: { editor }, event }) => {
    if (!isClipboardAPIAvailable()) {
      return;
    }

    const selection = window.getSelection();
    if (selection && (!selection.isCollapsed || selection.toString() !== "")) {
      // Prefer browser default behavior
      return;
    }

    if (blocks.length === 0) {
      return;
    }

    event.preventDefault();

    if (blocks.length === 1) {
      const block = blocks[0];
      block.wrapperRef.current?.classList.add("mt-be-focus");
      setTimeout(() => {
        block.wrapperRef.current?.classList.remove("mt-be-focus");
      }, 100);
      if ((block instanceof Text || block instanceof Table) && block.tinymce) {
        tinymceFocus(block.tinymce, null);
      }
    }

    let data = (
      await Promise.all(
        blocks.map((block) => block.toClipboardItem({ editor }))
      )
    ).reduce<ClipboardItem[] | string | undefined>((acc, item) => {
      if (item instanceof Array) {
        acc ||= [];
      } else {
        acc ||= "";
      }

      if (acc instanceof Array && item instanceof Array) {
        return acc.concat(item);
      } else if (typeof acc === "string" && typeof item === "string") {
        return acc + item;
      }
    }, undefined);

    if (typeof data === "string" && typeof ClipboardItem === "function") {
      const htmlBlob = new Blob([data], { type: "text/html" });
      const plainBlob = new Blob([data], { type: "text/plain" });
      data = [
        new ClipboardItem({
          "text/html": htmlBlob,
          "text/plain": plainBlob,
        }),
      ];
    }

    if (data instanceof Array) {
      navigator.clipboard.write(data);
    } else if (typeof data === "string") {
      navigator.clipboard.writeText(data);
    }
  },
};

export default command;
