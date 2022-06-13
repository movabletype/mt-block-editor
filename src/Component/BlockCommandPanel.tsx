import React, { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { useEditorContext } from "../Context";
import BlockCommand from "./BlockCommand";
import type Block from "../Block";

interface BlockCommandPanelProps {
  children?: ReactNode;
  in: boolean;
  block: Block;
  id?: string;
  className?: string;
}

const PANEL_CLASS_NAME = "mt-be-block-command-panel";

const BlockCommandPanel: React.FC<BlockCommandPanelProps> = (
  props: BlockCommandPanelProps
) => {
  const editorContext = useEditorContext();
  const { editor } = editorContext;

  let className = PANEL_CLASS_NAME;
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <CSSTransition
      timeout={100}
      in={props.in}
      unmountOnExit
      classNames={PANEL_CLASS_NAME}
    >
      <div id={props.id || ""} className={className}>
        {props.children}
        {editor.commandManager.contextCommands().map((command) => (
          <BlockCommand
            key={command.command}
            command={command}
            block={props.block}
          />
        ))}
      </div>
    </CSSTransition>
  );
};

export default BlockCommandPanel;
