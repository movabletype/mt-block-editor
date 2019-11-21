import Block from "./Block";
import BlockFactory from "./BlockFactory";
import TextBlock from "./Block/TextBlock";

export function getElementById(id: string): HTMLElement {
  const e = document.getElementById(id);
  if (!e) {
    throw Error(`${id} is not found`);
  }
  return e;
}

export function getNodeValue(e: Element): string {
  return (e && e.childNodes[0] ? e.childNodes[0].nodeValue : "") || "";
}

export function getNodeValueByTagName(e: Element, name: string): string {
  return [...e.getElementsByTagName(name)].map(e => getNodeValue(e)).join("");
}

export function escapeHtml(string: string): string {
  if (typeof string !== "string") {
    return string;
  }
  return string.replace(/[&'`"<>]/g, function(match) {
    return ({
      "&": "&amp;",
      "'": "&#x27;",
      "`": "&#x60;",
      '"': "&quot;",
      "<": "&lt;",
      ">": "&gt;",
    } as { [key: string]: string })[match];
  });
}

export function preParseContent(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&lt;!--\s+(\/?mtEditorBlock.*?)--&gt;/g, "<$1>");
}

export function parseContent(value: string, factory: BlockFactory): Block[] {
  if (!value) {
    return [];
  }

  const domparser = new DOMParser();
  const doc = domparser.parseFromString(
    `<xml>${value}</xml>`,
    "application/xml"
  );

  if (!doc.children[0]) {
    return [];
  }

  const root = doc.children[0];

  return [...root.children].map(node => {
    const typeId = node.getAttribute("data-mt-block-type");
    const t =
      factory.types().find((t: typeof Block) => t.typeId === typeId) ||
      TextBlock;
    return t.newFromHtml({
      html: node.textContent || "",
      node,
      factory,
    });
  });
}
