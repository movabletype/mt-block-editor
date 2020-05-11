import i18n from "mt-block-editor-block/i18n";
import { locales } from "../i18next-parser.config";

i18n.on("initialized", () => {
  locales.forEach((lang) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const l = require(`./locales/${lang}/translation.json`);
    i18n.addResources(lang, "translation", l);
  });
});

export function t(args: string | string[]): string {
  return i18n.t(args);
}
