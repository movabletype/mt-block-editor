import createDOMPurify from "dompurify";

export function getElementById(id: string): HTMLElement {
  const e = document.getElementById(id);
  if (!e) {
    throw Error(`${id} is not found`);
  }
  return e;
}

export function querySelector(
  elm: HTMLElement | Document,
  selector: string
): HTMLElement {
  const e = elm.querySelector(selector) as HTMLElement;
  if (!e) {
    throw Error(`${selector} is not found`);
  }
  return e;
}

export function getNodeValue(e: Element): string {
  return (e && e.childNodes[0] ? e.childNodes[0].nodeValue : "") || "";
}

export function getNodeValueByTagName(e: Element, name: string): string {
  return [...e.getElementsByTagName(name)].map((e) => getNodeValue(e)).join("");
}

const _entityMap = {
  "\t": "&#x08;",
  "\n": "&#x0A;",
  "\r": "&#x0D;",
  "&": "&amp;",
  "'": "&#x27;",
  "`": "&#x60;",
  '"': "&quot;",
  "<": "&lt;",
  ">": "&gt;",
} as { [key: string]: string };
export function escapeSingleQuoteAttribute(string: string): string {
  if (typeof string !== "string") {
    return string;
  }
  return string.replace(/[&<>'\t\n\r]/g, (match) => _entityMap[match]);
}

const DOMPurify = createDOMPurify(window);
export function sanitize(str: string): string {
  return DOMPurify.sanitize(str);
}
