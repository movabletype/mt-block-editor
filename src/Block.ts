import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import BlockFactory from "./BlockFactory";

export interface EditorOptions {
  focus: boolean;
}

export interface NewFromHtmlOptions {
  html: string;
  node: Element;
  factory: BlockFactory;
}

export default abstract class Block {
  public static typeId: string;
  public static label: string;
  public static selectable: boolean;
  public id: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static newFromHtml(opts: NewFromHtmlOptions): Block {
    throw "Should be implemented for each concrete class";
  }

  public constructor() {
    this.id = Math.round(Math.random() * 10000000) + "";
  }

  public htmlString(): string {
    const html = this.html();
    if (typeof html === "string") {
      return html;
    } else {
      return ReactDOMServer.renderToStaticMarkup(html);
    }
  }

  public serialize(): string {
    return `<!-- mtEditorBlock data-mt-block-type="${
      (this.constructor as typeof Block).typeId
    }" -->${this.htmlString()}<!-- /mtEditorBlock -->`;
  }

  abstract editor(opts: EditorOptions): JSX.Element;
  abstract html(): JSX.Element | string;
}

interface EditorProps {
  block: Block;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function recursiveMap(children: any, fn: (child: JSX.Element) => void): any {
  return React.Children.map(children, (child: JSX.Element) => {
    //    if (!React.isValidElement(child)) {
    //      return child;
    //    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn),
      });
    }

    return fn(child);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BuildEditor(fc: React.FC<any>): React.FC {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
    const block = props.block;
    const [_block, setBlock] = useState(block);

    return recursiveMap(fc(props), (child: JSX.Element) => {
      if (child.type === "input" && !child.props.onChange) {
        const n = child.props.name;

        return React.cloneElement(child, {
          defaultValue: _block[n],
          onChange: (ev: InputEvent) => {
            if (!ev.target) {
              return;
            }
            block[n] = (ev.target as HTMLInputElement).value;
            setBlock(block);
          },
        });
      } else {
        return child;
      }
    });
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BuildHtml(fc: React.FC<any>): React.FC {
  return fc;
}
