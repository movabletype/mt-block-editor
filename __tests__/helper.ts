import Editor, { EditorOptions } from "../src/Editor";

export function newEditor(opts: Partial<EditorOptions> = {}): Editor {
  const input = document.createElement("INPUT");
  input.id = "input-" + Math.random();
  document.body.appendChild(input);
  return new Editor({
    id: input.id,
    stylesheets: [],
    addButtons: { bottom: true },
    mode: "composition",
    block: {},
    i18n: {},
    ...opts,
  });
}
