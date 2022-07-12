import type Editor from "../../Editor";
import type Block from "../../Block";
import type { HasTinyMCE } from "../Text/util";
import type { Editor as TinyMCE, Settings } from "tinymce";
import type { EditorContextProps } from "../../Context";
import { decodeHtml } from "../../util";
import { BlockEditorPasteCommandEvent } from "../../commands/pasteBlock";

export const commonSettings: (
  editor: Editor,
  block: Block & HasTinyMCE,
  editorContext: EditorContextProps
) => Settings = (editor, block, editorContext) => ({
  language: editor.opts.i18n.lng,
  selector: `#${block.tinymceId()}`,
  menubar: false,
  fixed_toolbar_container: `[data-mt-be-toolbar="${block.id}"]`,
  inline: true,
  setup: (ed: TinyMCE) => {
    block.tinymce = ed;
  },
  paste_preprocess: (_, ev: Event & { content: string }) => {
    const content = ev.content.match(/^&lt;!-- mt-beb .* \/mt-beb --&gt;$/)
      ? decodeHtml(ev.content)
      : ev.content;
    if (content.match(/<!-- mt-beb .*? \/mt-beb -->$/)) {
      const clipboardData = new DataTransfer();
      clipboardData.setData("text/html", content);
      window.dispatchEvent(
        new BlockEditorPasteCommandEvent({
          blockIds: [block.id],
          editorContext,
          clipboardData,
        })
      );

      ev.preventDefault();
    }
  },
});
