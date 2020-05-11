import Block from "../Block";
import BlockFactory from "../BlockFactory";
import Text from "../Block/Text";
import Column from "../Block/Column";

export function preParseContent(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&lt;!--\s+(\/?mt-beb.*?)--&gt;/g, (all, tag) => {
      return `<${tag
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<")
        .replace(/&amp;/g, "&")}>`;
    });
}

export async function parseContent(
  value: string,
  factory: BlockFactory
): Promise<Block[]> {
  if (!value) {
    return [];
  }

  const domparser = new DOMParser();
  const doc = domparser.parseFromString(
    `<xml>${value.replace(
      // eslint-disable-next-line no-control-regex
      /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm,
      ""
    )}</xml>`,
    "application/xml"
  );

  if (!doc.children[0]) {
    return [];
  }

  let children = [...doc.children[0].children];
  if (children.length === 0) {
    const fallback = document.createElement("DIV");
    fallback.setAttribute("t", "core-html");
    fallback.innerHTML = value;
    children = [fallback];
  }

  // TODO: verify
  const blocks = [];
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    const typeId = node.getAttribute("t") || "core-text";
    const meta = JSON.parse(node.getAttribute("m") || "{}");

    let html = node.getAttribute("h") || "";
    if (!html && node.textContent) {
      let c = node.textContent;
      if (meta.className) {
        c = c.replace(
          /^(<[^>]+)( class=")([^"]+)"/,
          (m, tag, prefix, classNames) => {
            const filtered = classNames
              .split(/\s+/)
              .filter((c: string) => c !== meta.className)
              .join(" ");

            if (filtered) {
              return `${tag}${prefix}${filtered}"`;
            } else {
              return tag;
            }
          }
        );
      }
      html = c;
    }

    const param = {
      html,
      node,
      factory,
      meta,
    };

    const t =
      factory.types().find((t: typeof Block) => t.typeId === typeId) || Column;
    const block = await t
      .newFromHtml(param)
      .catch(() => Text.newFromHtml(param));
    blocks.push(block);
  }

  return blocks;
}

export function findDescendantBlock(
  block: Block,
  id: string | null
): Block | null {
  if (!id) {
    return null;
  }

  const childBlocks = block.childBlocks();
  for (let i = 0; i < childBlocks.length; i++) {
    const b = childBlocks[i];
    if (b.id === id) {
      return b;
    }

    const cb = findDescendantBlock(b, id);
    if (cb) {
      return cb;
    }
  }

  return null;
}
