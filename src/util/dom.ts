import createDOMPurify from "dompurify";

type TypeIndex = [string, number];

interface Selector {
  nthChildIndexes: number[];
  nthOfTypeIndexes: TypeIndex[];
  offset: number;
}

export interface SelectorSet {
  anchor: Selector;
  focus: Selector;
}

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

export function selectorCmp(a: Selector, b: Selector): number {
  for (let i = 0; i < a.nthChildIndexes.length; i++) {
    if (a.nthChildIndexes[i] !== b.nthChildIndexes[i]) {
      return a.nthChildIndexes[i] - b.nthChildIndexes[i];
    }
  }
  return a.offset - b.offset;
}

function buildSelector(node: Node, offset: number): Selector {
  const selector: Selector = {
    nthChildIndexes: [],
    nthOfTypeIndexes: [],
    offset: offset,
  };

  while (node && node.parentNode) {
    const nn = node.nodeName;

    selector.nthChildIndexes.unshift(
      ([...node.parentNode.childNodes] as Node[]).indexOf(node)
    );
    selector.nthOfTypeIndexes.unshift([
      nn,
      ([...node.parentNode.childNodes] as Node[])
        .filter((n) => n.nodeName === nn)
        .indexOf(node),
    ]);

    node = node.parentNode;
  }

  selector.nthChildIndexes.splice(0, 2);
  selector.nthOfTypeIndexes.splice(0, 2);

  return selector;
}

export function getShadowDomSelectorSet(blockId: string): SelectorSet | null {
  const div = document.querySelector(
    `[data-mt-block-editor-block-id="${blockId}"] .mt-be-block div:last-child`
  );
  if (!div || !div.shadowRoot) {
    return null;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const s = (div.shadowRoot as any).getSelection
    ? (div.shadowRoot as any).getSelection() // chrome
    : document.getSelection(); // firefox
  /* eslint-enable @typescript-eslint/no-explicit-any */

  // currently only supports text nodes
  if (
    !s ||
    !s.anchorNode ||
    !s.anchorNode.parentNode ||
    (s.anchorNode.parentNode as HTMLElement).closest("body") ||
    !s.focusNode ||
    !s.focusNode.parentNode
  ) {
    return null;
  }

  return {
    anchor: buildSelector(s.anchorNode, s.anchorOffset),
    focus: buildSelector(s.focusNode, s.focusOffset),
  };
}

export function getElementByNthOfTypeIndexes(
  node: HTMLElement | null,
  indexes: TypeIndex[]
): HTMLElement | null {
  indexes.forEach(([nodeName, i]) => {
    if (!node) {
      return;
    }

    node = (
      [...node.childNodes].filter((n) => {
        if (
          n instanceof HTMLElement &&
          (n.getAttribute("data-mce-caret") || n.getAttribute("data-mce-bogus"))
        ) {
          return false;
        }

        return n.nodeName === nodeName;
      }) as HTMLElement[]
    )[i];
  });
  return node;
}

export const escapeSingleQuoteAttribute = (() => {
  const entityMap: Record<string, string> = {
    "\t": "&#x08;",
    "\n": "&#x0A;",
    "\r": "&#x0D;",
    "&": "&amp;",
    "'": "&#x27;",
    "<": "&lt;",
    ">": "&gt;",
    "\u2018": "&#x2018;", // left single quotation mark
    "\u2019": "&#x2019;", // right single quotation mark
    "\u201c": "&#x201c;", // left double quotation mark
    "\u201d": "&#x201d;", // right double quotation mark
  };
  const entityRegExp = new RegExp(`[${Object.keys(entityMap).join("")}]`, "g");

  return (string: string): string => {
    if (typeof string !== "string") {
      return string;
    }
    return string.replace(entityRegExp, (match) => entityMap[match]);
  };
})();

const DOMPurify = createDOMPurify(window);
export function sanitize(str: string): string {
  return DOMPurify.sanitize(str);
}

export function decodeHtml(html: string): string {
  const e = document.createElement("textarea");
  e.innerHTML = html;
  return e.value;
}

export function isPassThroughNativeEvent(ev: Event): boolean {
  return !!(ev.target instanceof Element && ev.target.closest(".tox"));
}
