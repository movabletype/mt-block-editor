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

export const NO_BLOCK_TYPE_FALLBACK = "";

export async function parseContent(
  value: string,
  factory: BlockFactory,
  context: ParserContext,
  fallbackBlockType: string | typeof NO_BLOCK_TYPE_FALLBACK = "core-html"
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
    if (fallbackBlockType !== NO_BLOCK_TYPE_FALLBACK) {
      const fallback = document.createElement("DIV");
      fallback.setAttribute("t", fallbackBlockType);
      fallback.innerHTML = value;
      children = [fallback];
    } else {
      return [];
    }
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

interface GetBlocksByRangeState {
  ids: Readonly<Set<string>>;
  rootBlocks: Readonly<Block[]>;
  foundCount: number;
  startBlocks?: Readonly<Block[]>;
  endBlocks?: Readonly<Block[]>;
  result?: Readonly<Block[]>;
}
export function getBlocksByRange(
  ancestor: Block | Editor,
  ids: Readonly<string[]>
): Readonly<Block[]> {
  const childBlocks =
    ancestor instanceof Editor ? ancestor.blocks : ancestor.childBlocks();
  const state: GetBlocksByRangeState = {
    ids: new Set<string>(ids),
    rootBlocks: childBlocks,
    foundCount: 0,
  };
  getBlocksByRangeInternal(childBlocks, state);
  return state.result || emptyBlocks;
}

function getBlocksByRangeInternal(
  childBlocks: Readonly<Block[]>,
  state: GetBlocksByRangeState,
  parents: Readonly<Block[]> = []
): Readonly<Block[]> | undefined {
  if (state.result && state.foundCount === state.ids.size) {
    return;
  }
  childBlocks.forEach((b) => {
    const currentBlocks = [...parents, b];

    getBlocksByRangeInternal(b.childBlocks(), state, currentBlocks);
    if (state.result && state.foundCount === state.ids.size) {
      return;
    }
    if (state.ids.has(b.id)) {
      state.foundCount++;

      if (state.ids.size === 1) {
        state.result = [b];
      } else if (state.startBlocks) {
        let range: {
          blocks: Readonly<Block[]>;
          start: string;
          end: string;
        };
        findRange: for (let i = state.startBlocks.length - 2; i >= 0; i--) {
          for (let j = currentBlocks.length - 2; j >= 0; j--) {
            if (state.startBlocks[i] === currentBlocks[j]) {
              range = {
                blocks: state.startBlocks[i].childBlocks(),
                start: state.startBlocks[i + 1].id,
                end: currentBlocks[j + 1].id,
              };
              break findRange;
            }
          }
        }

        range ||= {
          blocks: state.rootBlocks,
          start: state.startBlocks[0].id,
          end: currentBlocks[0].id,
        };

        const blockIds = range.blocks.map((b) => b.id);
        state.result = range.blocks.slice(
          blockIds.indexOf(range.start),
          blockIds.indexOf(range.end) + 1
        );
      } else {
        state.startBlocks = currentBlocks;
      }
    }
  });
}
