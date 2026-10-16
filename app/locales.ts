export const locales = ["fr", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export function isLang(value: string): value is Lang {
    return (locales as readonly string[]).includes(value);
}
