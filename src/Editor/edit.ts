import { EditHistoryHandlers } from "../EditManager";

export const add: EditHistoryHandlers = {
  id: Symbol("add"),
  undo(hist, { editor, setFocusedId }) {
    const parent = hist.data.parent || editor;
    const index = parent.blocks.indexOf(hist.block);
    editor.removeBlock(parent, hist.block);
    if (index > 0) {
      setFocusedId(parent.blocks[index - 1].id);
    }
  },
  redo(hist, { editor, setFocusedId }) {
    const parent = hist.data.parent || editor;
    editor.addBlock(parent, hist.block, hist.data.index);
    setFocusedId(hist.block.id);

    // You need to force a re-render to see the block
    if (parent.blocks.length === 1) {
      editor.render();
    }
  },
};

export const remove: EditHistoryHandlers = {
  id: Symbol("remove"),
  undo(hist, { editor, setFocusedId }) {
    editor.addBlock(hist.data.parent || editor, hist.block, hist.data.index);
    setFocusedId(hist.block.id, { forceUpdate: true });
  },
  redo(hist, { editor, setFocusedId }) {
    const parent = hist.data.parent || editor;
    const index = parent.blocks.indexOf(hist.block);
    editor.removeBlock(parent, hist.block);
    if (index > 0) {
      setFocusedId(parent.blocks[index - 1].id);
    }
  },
};

export const swap: EditHistoryHandlers = {
  id: Symbol("swap"),
  undo(hist, { editor }) {
    editor.swapBlocks(hist.data.parent || editor, hist.data.a, hist.data.b);
  },
  redo(hist, { editor }) {
    editor.swapBlocks(hist.data.parent || editor, hist.data.a, hist.data.b);
  },
};
