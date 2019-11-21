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
    if (child.type === "input" && !child.props.onChange) {
      const n = child.props.name;

      return React.cloneElement(child, {
        value: block[n],
        onChange: (ev: InputEvent) => {
          if (!ev.target) {
            return;
          }
          block[n] = (ev.target as HTMLInputElement).value;
          setBlock(Object.assign({}, block));
        },
      });
    } else {
      return child;
    }
  });
}
