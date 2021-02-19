import type { EditorUtil, BoilerplateBlockOptions } from "./mt-block-editor";

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

export default function init(
  MTBlockEditor: typeof EditorUtil,
  blockTypes: string[],
  blocks: BlockOptions[]
): void {
  blocks.forEach((block) => {
    const panelBlockTypes = Array.from(blockTypes);
    const shortcutBlockTypes = Array.from(blockTypes);

    (block.addableBlockTypes.post || [])
      .concat({ typeId: block.typeId, panel: false, shortcut: false })
      .reverse()
      .forEach((b) => {
        [
          {
            ids: panelBlockTypes,
            key: "panel" as keyof AddableBlockType,
          },
          {
            ids: shortcutBlockTypes,
            key: "shortcut" as keyof AddableBlockType,
          },
        ].forEach((conf: { ids: string[]; key: keyof AddableBlockType }) => {
          const index = conf.ids.indexOf(b.typeId);
          if (index === -1) {
            return;
          }

          const typeId = conf.ids.splice(index, 1)[0];

          if (b[conf.key]) {
            // add to head if enabled
            conf.ids.splice(0, 0, typeId);
          }
        });
      });

    MTBlockEditor.registerBlockType(
      MTBlockEditor.createBoilerplateBlock(
        Object.assign(block, { panelBlockTypes, shortcutBlockTypes })
      )
    );
  });
}

const MTBlockEditor = window.MTBlockEditor;
const scriptElm = document.querySelector(`script[src^="${import.meta.url}"][data-block-types][data-blocks]`);
const dataset = scriptElm?.dataset;
const blockTypes = dataset && dataset.blockTypes;
const blocks = dataset && dataset.blocks;
if (MTBlockEditor && blocks && blockTypes) {
  init(
    MTBlockEditor,
    JSON.parse(blockTypes) as string[],
    JSON.parse(blocks) as BlockOptions[]
  );
}
