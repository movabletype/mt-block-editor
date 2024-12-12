import { default as i18n } from 'i18next';
export default i18n;
type TFunction = {
    (strings: TemplateStringsArray, ...values: any[]): string;
    (string: string): string;
};
export declare const t: TFunction;
