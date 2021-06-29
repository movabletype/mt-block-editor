import type { EditorUtil, BoilerplateBlockOptions } from "./mt-block-editor";

declare global {
  interface ImportMeta {
    url: string;
  }
}

interface AddableBlockType {
  typeId: string;
  panel: boolean;
  shortcut: boolean;
}

interface AddableBlockTypesMap {
  [key: string]: AddableBlockType[];
}

interface BlockOptions extends BoilerplateBlockOptions {
  addableBlockTypes: AddableBlockTypesMap;
}

export function registerBoilerplateBlocks(
  MTBlockEditor: typeof EditorUtil,
  blockTypes: string[],
  blocks: BlockOptions[]
): void {
  blocks.forEach((block) => {
    const panelBlockTypes = Array.from(blockTypes); // display all by default
    const shortcutBlockTypes: string[] = []; // display nothing by default

    (block.addableBlockTypes.post || block.addableBlockTypes.common || [])
      .concat({ typeId: block.typeId, panel: false, shortcut: false })
      .reverse()
      .forEach(({ typeId, panel, shortcut }) => {
        const index = panelBlockTypes.indexOf(typeId);
        if (index === -1) {
          // unkown typeId
          return;
        }

        panelBlockTypes.splice(index, 1);
        if (panel) {
          panelBlockTypes.unshift(typeId);
        }

        if (shortcut) {
          shortcutBlockTypes.unshift(typeId);
        }
      });

    MTBlockEditor.registerBlockType(
      MTBlockEditor.createBoilerplateBlock(
        Object.assign(block, { panelBlockTypes, shortcutBlockTypes })
      )
    );
  });
}

const MTBlockEditor = window.MTBlockEditor;
const scriptElm = (() => {
  const elm = document.querySelector(
    `script[data-block-types][data-blocks]`
  ) as HTMLScriptElement | null;
  return elm && elm.src.startsWith(import.meta.url) ? elm : null;
})();
const blockTypes = scriptElm && scriptElm.dataset.blockTypes;
const blocks = scriptElm && scriptElm.dataset.blocks;
if (MTBlockEditor && blocks && blockTypes) {
  registerBoilerplateBlocks(
    MTBlockEditor,
    JSON.parse(blockTypes) as string[],
    JSON.parse(blocks) as BlockOptions[]
  );
}
