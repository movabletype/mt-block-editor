import i18n, { TFunction, InitOptions } from "i18next";
import { locales } from "../i18next-parser.config";
import Backend from "i18next-xhr-backend";
//import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //.use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .on("initialized", () => {
    locales.forEach(lang => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const l = require(`./locales/${lang}/translation.json`);
      i18n.addResourceBundle(lang, "translation", l, true, false);
    });
  });

export default i18n;

let initPromise: Promise<TFunction> | null = null;
export async function init(opts: InitOptions): Promise<TFunction> {
  if (!initPromise) {
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    initPromise = i18n.init(
      Object.assign(
        {
          fallbackLng: "en",
          debug: false,

          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        opts
      )
    );
  }

  return initPromise;
}

export function t(args: string | string[]): string {
  return i18n.t(args);
}
