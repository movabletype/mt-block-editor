import type Editor from "../../Editor";
import type { HasTinyMCE } from "../Text/util";
import type { Editor as TinyMCE, Settings } from "tinymce";

export const commonSettings: (editor: Editor, block: HasTinyMCE) => Settings = (
  editor,
  block
) => ({
  language: editor.opts.i18n.lng,
  selector: `#${block.tinymceId()}`,
  menubar: false,
  fixed_toolbar_container: `#${block.tinymceId()}toolbar`,
  inline: true,
  setup: (ed: TinyMCE) => {
    block.tinymce = ed;
  },
  paste_preprocess: (_, ev: Event & { content: string }) => {
    if (ev.content.match(/^&lt;!-- mt-beb .* \/mt-beb --&gt;$/)) {
      ev.preventDefault();
    }
  },
});
