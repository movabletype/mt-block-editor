import React, { memo } from "react";
import { useEditorContext, useBlocksContext } from "../Context";
import { findDescendantBlocks } from "../util";

const RemoveButton: React.FC = memo(function RemoveButton() {
  const { editor, getFocusedIds } = useEditorContext();
  const { removeBlock } = useBlocksContext();

  return (
    <button
      type="button"
      className="mt-be-btn-remove"
      onClick={(ev) => {
        ev.stopPropagation();

        const blocks = findDescendantBlocks(editor, getFocusedIds());
        editor.editManager.beginGrouping();
        blocks.forEach((block) => removeBlock(block));
        editor.editManager.endGrouping();
      }}
    />
  );
});

export default RemoveButton;
