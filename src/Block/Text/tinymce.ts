import type Editor from "../../Editor";
import type Block from "../../Block";
import type { HasTinyMCE } from "../Text/util";
import type {
  Editor as TinyMCEEditor,
  TinyMCE,
  RawEditorOptions,
} from "tinymce";
import type { EditorContextProps } from "../../Context";
import { decodeHtml } from "../../util";
import { BlockEditorPasteCommandEvent } from "../../commands/pasteBlock";
import MTBlockEditorPlugin from "./tinymce/MTBlockEditorPlugin";

declare const tinymce: TinyMCE;

export const installPlugins = (() => {
  let pluginsInstalled = false;
  return (): void => {
    if (pluginsInstalled) {
      return;
    }
    pluginsInstalled = true;

    tinymce.PluginManager.add("MTBlockEditor", MTBlockEditorPlugin);
  };
})();

export const commonSettings: (
  editor: Editor,
  block: Block & HasTinyMCE,
  editorContext: EditorContextProps
) => RawEditorOptions = (editor, block, editorContext) => ({
  language: editor.opts.i18n.lng,
  selector: `#${block.tinymceId()}`,
  menubar: false,
  fixed_toolbar_container: `[data-mt-be-toolbar="${block.id}"]`,
  inline: true,
  setup: (ed: TinyMCEEditor) => {
    block.tinymce = ed;
  },
  paste_preprocess: (_, ev) => {
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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ev as any).preventDefault?.(); // PastePreProcessEvent probably has preventDefault
    }
  },
});
