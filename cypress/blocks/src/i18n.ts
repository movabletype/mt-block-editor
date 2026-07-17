import rawI18n from "../../../sub-projects/mt-block-editor-block/dist/i18n";
import { interopDefault } from "./interop";

const i18n = interopDefault(rawI18n);

const translations = import.meta.glob<{ default: object }>(
  "./locales/*/translation.json",
  { eager: true, import: "default" }
);

i18n.on("initialized", () => {
  for (const [path, l] of Object.entries(translations)) {
    const lang = path.match(/\.\/locales\/(.+)\/translation\.json/)?.[1];
    if (lang) {
      i18n.addResources(lang, "translation", l);
    }
  }
});

export function t(args: string | string[]): string {
  return i18n.t(args);
}
