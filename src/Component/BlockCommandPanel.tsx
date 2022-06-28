import React, { memo, ReactNode, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useEditorContext } from "../Context";
import type { Command } from "../CommandManager";
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

const BlockCommandPanel: React.FC<BlockCommandPanelProps> = memo(
  function BlockCommandPanel(props: BlockCommandPanelProps) {
    const [commands, setCommands] = useState<Command[]>([]);
    const editorContext = useEditorContext();
    const { editor } = editorContext;

    let className = PANEL_CLASS_NAME;
    if (props.className) {
      className += ` ${props.className}`;
    }

    useEffect(() => {
      editor.commandManager.contextCommands().then(setCommands);
    }, []);

    if (commands.length === 0) {
      return null;
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
          {commands.map((command) => (
            <BlockCommand
              key={command.command}
              command={command}
              block={props.block}
            />
          ))}
        </div>
      </CSSTransition>
    );
  },
  (prev, next) => prev.in === next.in
);

export default BlockCommandPanel;
