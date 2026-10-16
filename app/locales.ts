export const locales = ["fr", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export function isLang(value: string): value is Lang {
    return (locales as readonly string[]).includes(value);
}

/** Pick a supported language from an Accept-Language header; a valid `lang` cookie wins. */
export function pickLang(acceptLanguage: string | null | undefined, cookie?: string): Lang {
    if (cookie && isLang(cookie)) return cookie;
    const ranked = (acceptLanguage ?? "")
        .split(",")
        .map((part) => {
            const [tag, ...params] = part.trim().split(";");
            const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
            const weight = q ? Number.parseFloat(q.slice(2)) : 1;
            return { code: tag.toLowerCase().split("-")[0], weight: Number.isNaN(weight) ? 0 : weight };
        })
        .filter((l) => isLang(l.code))
        .sort((a, b) => b.weight - a.weight);
    return (ranked[0]?.code as Lang | undefined) ?? defaultLang;
}
