import React, { useState, useEffect } from "react";
import Block from "../Block";
import { useEditorContext } from "../Context";
import { EditHistoryHandlers } from "../EditManager";

const DEFAULT_MIN_ROWS = 5;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function recursiveMap(children: any, fn: (child: JSX.Element) => void): any {
  return React.Children.map(children, (child: JSX.Element) => {
    // if (!React.isValidElement(child)) {
    //   return child;
    // }
    if (!child || !child.props) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn),
      });
    }

    return fn(child);
  });
}

function rowCount(value: string): number {
  return (value.match(/\r|\n/g) || []).length + 1;
}

const editHandlers: EditHistoryHandlers = {
  id: Symbol("edit"),
  merge(a, b) {
    a.data.cur = b.data.cur;
    return a;
  },
  undo(hist, { editor, setFocusedIds }) {
    hist.data.cur = hist.data.cur || (hist.block as MapObject)[hist.data.name];
    (hist.block as MapObject)[hist.data.name] = hist.data.last;
    setFocusedIds([hist.block.id]);
    editor.render();
  },
  redo(hist, { editor, setFocusedIds }) {
    (hist.block as MapObject)[hist.data.name] = hist.data.cur;
    setFocusedIds([hist.block.id]);
    editor.render();
  },
};

interface EditorProps {
  block: Block;
}

interface MapObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function blockProperty<T extends EditorProps>(
  editor: React.FC<T>
): React.FC<T> {
  return (props: T) => {
    const block: MapObject = props.block as MapObject;
    const { wrapperRef } = props.block;
    const [, setBlock] = useState(Object.assign({}, block));
    const [editGroups, setEditGroups] = useState<MapObject>({});
    const children = editor(props);
    const editorContext = useEditorContext();
    const { setFocusedIds, getFocusedIds } = editorContext;
    const blockEditor = editorContext.editor;

    useEffect(() => {
      // focus
      setTimeout(function () {
        const wrapperElement = wrapperRef.current;
        if (!wrapperElement) {
          return;
        }

        const focusEl = wrapperElement.querySelector<HTMLElement>(
          `[data-mt-block-editor-focus-default]`
        );
        if (!focusEl) {
          return;
        }

        // Skip if focusEl is a grand child
        if (
          focusEl.closest("[data-mt-block-editor-block-id]") !== wrapperElement
        ) {
          return;
        }

        if (
          !block.isNewlyAdded &&
          focusEl.closest(`[data-mt-block-editor-skip-focus-default]`)
        ) {
          return;
        }

        const activeEl = document.activeElement;
        if (
          activeEl &&
          activeEl.closest(
            getFocusedIds()
              .map((id) => `[data-mt-block-editor-block-id="${id}"]`)
              .join(",")
          )
        ) {
          return;
        }

        focusEl.focus();
      }, 10);

      // adjust height
      wrapperRef.current
        ?.querySelectorAll<HTMLTextAreaElement>(`textarea[data-min-rows]`)
        .forEach((target) => {
          if (target.scrollHeight > target.offsetHeight) {
            target.style.height = target.scrollHeight + "px";
          }
        });
    }, []);

    return recursiveMap(children, (child: JSX.Element) => {
      if (
        child.type !== "input" &&
        child.type !== "textarea" &&
        child.type !== "select"
      ) {
        return child;
      }

      if ("defaultValue" in child.props) {
        return child;
      }

      if (child.props.onChange && child.props.onKeyDown) {
        return child;
      }

      const n = child.props["data-property-name"] ?? child.props.name;

      if (!(n in block)) {
        return child;
      }

      const value = block[n] === null ? "" : block[n];
      const minRows =
        parseInt(child.props["data-min-rows"], 10) || DEFAULT_MIN_ROWS;

      const onChange = (ev: InputEvent): void => {
        if (!ev.target) {
          return;
        }

        const target = ev.target as HTMLElement;
        const lastValue = block[n];
        const value = (target as HTMLInputElement).value;
        block[n] = value;

        if (target instanceof HTMLTextAreaElement) {
          const rc = rowCount(value);
          if (rc !== rowCount(lastValue)) {
            if (target.scrollHeight <= target.offsetHeight) {
              // Reset when the number of rows has decreased
              target.style.height = "";
            }

            if (target.scrollHeight > target.offsetHeight) {
              target.style.height = target.scrollHeight + "px";
            }
          }
        }

        if (!editGroups[n]) {
          editGroups[n] = blockEditor.editManager.generateGroup();
          setEditGroups(editGroups);
        }
        blockEditor.editManager.add({
          group: editGroups[n],
          block: props.block,
          data: {
            name: n,
            last: lastValue,
          },
          handlers: editHandlers,
        });

        setBlock(Object.assign({}, block));
      };

      const onKeyDown = (ev: KeyboardEvent): void => {
        const target = ev.target as HTMLElement;
        if (!(target instanceof HTMLInputElement)) {
          return;
        }
        if (ev.keyCode === 13) {
          ev.preventDefault();
          setFocusedIds([]); // blur
        }
      };

      return React.cloneElement(child, {
        name: undefined,
        value: value,
        rows: minRows,
        "data-min-rows": minRows,
        onChange: child.props.onChange || onChange,
        onKeyDown: child.props.onKeyDown || onKeyDown,
      });
    });
  };
}
