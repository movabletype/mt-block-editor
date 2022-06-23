import { t } from "../i18n";
import icon from "../img/copy.svg";
import type { Command } from "../CommandManager";
import { tinymceFocus } from "../Block/Text/util";
import Text from "../Block/Text";
import Table from "../Block/Table";

const command: Command = {
  get label() {
    return t("Copy");
  },
  icon,
  shortcut: "cmd+c",
  command: "core-copyBlock",
  condition: async () =>
    (
      await navigator.permissions
        .query({
          name: "clipboard-read" as PermissionName,
        })
        .catch(() => ({
          state: "granted", // fall back to "granted"
        }))
    ).state !== "denied",
  callback: async ({
    detail: {
      blocks,
      editorContext: { editor },
    },
  }) => {
    if (blocks.length === 0) {
      return;
    }

    if (blocks.length === 1) {
      const block = blocks[0];
      const blockId = block.id;
      document
        .querySelector(`[data-mt-block-editor-block-id="${blockId}"]`)
        ?.classList.add("mt-be-focus");
      setTimeout(() => {
        document
          .querySelector(`[data-mt-block-editor-block-id="${blockId}"]`)
          ?.classList.remove("mt-be-focus");
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
