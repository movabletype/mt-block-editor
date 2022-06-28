import i18n, { TFunction, InitOptions } from "i18next";
import { locales } from "../i18next-parser.config";
import Backend from "i18next-xhr-backend";

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  .on("initialized", () => {
    locales.forEach((lang) => {
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

          backend: {
            loadPath: URL.createObjectURL(
              new Blob(["{}"], { type: "application/json" })
            ),
            crossDomain: true,
          },

          nsSeparator: ":::",
          keySeparator: "::",
        },
        opts
      )
    );
  }

  return initPromise;
}

export function t(
  args: string | string[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
): string {
  return i18n.t(args, params);
}
