import React, { useState } from "react";
import Block from "../Block";

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

interface EditorProps {
  block: Block;
}

interface MapObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function useEditorUtil(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: React.FC<any>,
  props: EditorProps
): JSX.Element {
  const block: MapObject = props.block as MapObject;
  const [, setBlock] = useState(Object.assign({}, block));
  const children = editor(props);

  return recursiveMap(children, (child: JSX.Element) => {
    if (
      (child.type === "input" || child.type === "textarea") &&
      !child.props.onChange
    ) {
      const n = child.props.name;

      return React.cloneElement(child, {
        value: block[n],
        "data-default-rows": child.props.rows || 5,
        rows: child.props.rows || 5,
        onChange: (ev: InputEvent) => {
          if (!ev.target) {
            return;
          }
          const value = (ev.target as HTMLInputElement).value;
          block[n] = value;

          (ev.target as HTMLTextareaElement).rows = Math.max(
            parseInt(ev.target.dataset.defaultRows, 10),
            value.split(/\r|\n/).length
          );

          setBlock(Object.assign({}, block));
        },
      });
    } else {
      return child;
    }
  });
}
