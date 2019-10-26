import Block from "./Block";
import BlockFactory from "./BlockFactory";
import TextBlock from "./Block/TextBlock";

function getElementById(id: string): HTMLElement {
  const e = document.getElementById(id);
  if (!e) {
    throw Error(`${id} is not found`);
  }
  return e;
}

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve((reader.result || "").toString());
    };

    reader.onerror = e => {
      reject(e.toString());
    };

    reader.readAsText(file);
  });
}

function getNodeValue(e: Element): string {
  return (e && e.childNodes[0] ? e.childNodes[0].nodeValue : "") || "";
}

function getNodeValueByTagName(e: Element, name: string): string {
  return [...e.getElementsByTagName(name)].map(e => getNodeValue(e)).join("");
}

const MSG_MAP: { [key: string]: string } = {
  post: "記事",
  page: "ウェブページ",
};
function loc(msgid: string): string {
  return MSG_MAP[msgid] || msgid;
}

function escapeHtml(string: string): string {
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

function preParseContent(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&lt;!--\s+(\/?mtEditorBlock.*?)--&gt;/g, "<$1>");
}

function parseContent(value: string, factory: BlockFactory): Block[] {
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

export {
  getElementById,
  readFile,
  loc,
  getNodeValue,
  getNodeValueByTagName,
  escapeHtml,
  preParseContent,
  parseContent,
};
