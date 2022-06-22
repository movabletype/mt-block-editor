import Editor from "../Editor";
import Block from "../Block";
import BlockFactory from "../BlockFactory";
import Text from "../Block/Text";
import Column from "../Block/Column";
import ParserContext from "./ParserContext";

export const preParseContent = (() => {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  } as { [key: string]: string };
  const entityReverseMap = Object.fromEntries(
    Object.entries(entityMap).map(([k, v]) => [v, k])
  );
  const entityRegExp = new RegExp(`[${Object.keys(entityMap).join("")}]`, "g");
  const entityReverseRegExp = new RegExp(
    `(?:${Object.keys(entityReverseMap).join("|")})`,
    "g"
  );

  return (value: string): string => {
    return value
      .replace(entityRegExp, (match) => entityMap[match])
      .replace(/&lt;!--\s+(\/?mt-beb.*?)--&gt;/g, (all, tag: string) => {
        return `<${tag.replace(
          entityReverseRegExp,
          (match) => entityReverseMap[match]
        )}>`;
      });
  };
})();

export function removeControlCharacters(str: string): string {
  return str.replace(
    // eslint-disable-next-line no-control-regex,no-misleading-character-class
    /&#(?:0*?(?:[0-8]|1[124-9]|2\d|3[01])?|x0*?(?:[0-8bcefBCEF]|1[0-9a-fA-F])?);|[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD\uD800-\uDBFF\uDC00-\uDFFF]/gm,
    ""
  );
}

export async function parseContent(
  value: string,
  factory: BlockFactory,
  context: ParserContext,
  fallbackBlockType = "core-html"
): Promise<Block[]> {
  if (!value) {
    return [];
  }

  const domparser = new DOMParser();
  const doc = domparser.parseFromString(
    `<xml>${removeControlCharacters(value)}</xml>`,
    "application/xml"
  );

  if (!doc.children[0]) {
    return [];
  }

  let children = [...doc.children[0].children];
  if (children.length === 0) {
    const fallback = document.createElement("DIV");
    fallback.setAttribute("t", fallbackBlockType);
    fallback.innerHTML = value;
    children = [fallback];
  }

  // TODO: verify
  const blocks = [];
  for (let i = 0; i < children.length; i++) {
    const node = children[i];
    const typeId = node.getAttribute("t") || "core-text";

    const metaRawValue = node.getAttribute("m") || "{}";
    const metaArray = (metaRawValue.match(/\w+|,|.+/g) || [])
      .filter((str) => str !== ",")
      .map((str) =>
        /^[^{]/.test(str) ? context.get(str) || {} : JSON.parse(str)
      );
    const meta =
      metaArray.length === 1
        ? metaArray[0]
        : Object.assign.apply(null, [{}, ...metaArray]);

    if (typeId === "core-context") {
      for (const k in meta) {
        context.set(k, meta[k]);
      }
      continue;
    }

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
      context,
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

const emptyBlocks: Block[] = [];
export function findDescendantBlocks(
  ancestor: Block | Editor,
  ids: Readonly<string[]>
): Readonly<Block[]> {
  if (ids.length === 0) {
    return emptyBlocks;
  }

  const childBlocks =
    ancestor instanceof Editor ? ancestor.blocks : ancestor.childBlocks();
  if (childBlocks.length === 0) {
    return emptyBlocks;
  }

  return findDescendantBlocksInternal([...ids], childBlocks);
}

function findDescendantBlocksInternal(
  ids: string[],
  childBlocks: Readonly<Block[]>
): Readonly<Block[]> {
  const result: Block[] = [];
  for (let i = 0, len = childBlocks.length; i < len; i++) {
    const b = childBlocks[i];
    const index = ids.indexOf(b.id);
    if (index !== -1) {
      result.push(b);
      ids.splice(index, 1);
      if (ids.length === 0) {
        return result;
      }
    }

    result.push(...findDescendantBlocksInternal(ids, b.childBlocks()));
    if (ids.length === 0) {
      return result;
    }
  }

  return result;
}

export function getBlocksByRange(
  ancestor: Block | Editor,
  start: string,
  end: string
): Block[] {
  const childBlocks =
    ancestor instanceof Editor ? ancestor.blocks : ancestor.childBlocks();
  let started = false;
  const blocks = [];
  for (let i = 0; i < childBlocks.length; i++) {
    const b = childBlocks[i];
    if (b.id === start || b.id === end) {
      blocks.push(b);
      if (started || start === end) {
        return blocks;
      } else {
        started = true;
      }
    } else if (started) {
      blocks.push(b);
    }
  }

  return started ? [] : blocks;
}
