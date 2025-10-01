import React, { memo, ReactNode, useEffect, useState, useRef } from "react";
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
const PANEL_PLACEMENT_DATA_NAME = `mtBeBlockCommandPanelPlacement`;

const BlockCommandPanel: React.FC<BlockCommandPanelProps> = memo(
  function BlockCommandPanel(props: BlockCommandPanelProps) {
    const [commands, setCommands] = useState<Command[]>([]);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const editorContext = useEditorContext();
    const { editor } = editorContext;

    let className = PANEL_CLASS_NAME;
    if (props.className) {
      className += ` ${props.className}`;
    }

    useEffect(() => {
      let unloaded = false;
      editor.commandManager.contextCommands().then((commands) => {
        if (!unloaded) {
          setCommands(commands);
        }
      });
      return () => {
        unloaded = true;
      };
    }, []);

    useEffect(() => {
      const panel = panelRef.current;
      if (props.in && panel) {
        panel.dataset[PANEL_PLACEMENT_DATA_NAME] = "left"; // initial state
        const left = panel.getBoundingClientRect().left;
        if (left < 0) {
          // place the panel below if it extends beyond the left edge of the viewport.
          panel.dataset[PANEL_PLACEMENT_DATA_NAME] = "bottom";
        }
      }
    }, [props.in]);

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
        <div id={props.id || ""} className={className} ref={panelRef}>
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
