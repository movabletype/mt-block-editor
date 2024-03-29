import type { Editor as TinyMCEEditor } from "tinymce";

const eventAttrs = [
  "onabortonblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncontextmenu",
  "oncuechange",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onmousedown",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmousewheel",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreset",
  "onscroll",
  "onseeked",
  "onseeking",
  "onseeking",
  "onselect",
  "onshow",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "onvolumechange",
  "onwaiting",
  "formaction",
  "action",
];
const eventPrefix = "data-mt-be-ev-";

const eventAttrsArg = eventAttrs.join(",");
const eventPrefixedAttrsArg = eventAttrs
  .map((n) => `${eventPrefix}${n}`)
  .join(",");

function addEventHandlerFilter(ed: TinyMCEEditor): void {
  ed.parser.addAttributeFilter(eventAttrsArg, (nodes, name) => {
    nodes.forEach((node) => {
      if (!node.attr(eventPrefix + name)) {
        node.attr(eventPrefix + name, node.attr(name) || "");
      }
      node.attr(name, "javascript:void(0)");
    });
  });

  ed.serializer.addAttributeFilter(
    eventPrefixedAttrsArg,
    (nodes, nameWithPrefix) => {
      nodes.forEach((node) => {
        if (node.attr(nameWithPrefix)) {
          const name = nameWithPrefix.substring(eventPrefix.length);
          node.attr(name, node.attr(nameWithPrefix) || "");
        }
        node.attr(nameWithPrefix, null);
      });
    }
  );
}

const commentPrefix = "data-mt-be-comment ";

function addCommentFilter(ed: TinyMCEEditor): void {
  ed.parser.addNodeFilter("#comment", function (nodes) {
    nodes.forEach((node) => {
      if (node.value) {
        node.value = commentPrefix + escape(node.value);
      }
    });
  });

  ed.serializer.addNodeFilter("#comment", function (nodes) {
    nodes.forEach((node) => {
      const value = node.value;
      if (!value) {
        return;
      }
      if (value.indexOf(commentPrefix) === 0) {
        node.value = unescape(value.substring(commentPrefix.length));
      }
    });
  });
}

function plugin(ed: TinyMCEEditor): void {
  ed.on("PreInit", ({ target }: { target: TinyMCEEditor }) => {
    addEventHandlerFilter(target);

    if (parseInt(target.editorManager.majorVersion) >= 6) {
      return;
    }

    addCommentFilter(target);
  });
}

export default plugin;
