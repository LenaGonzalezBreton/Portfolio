import { readFileSync } from "node:fs";
import path from "node:path";

const css = readFileSync(path.join(__dirname, "../app/globals.css"), "utf8");

function tokens(selector: string): Record<string, string> {
    const start = css.indexOf(selector + " {");
    if (start === -1) throw new Error(`block ${selector} not found`);
    const block = css.slice(start, css.indexOf("}", start));
    const out: Record<string, string> = {};
    for (const m of block.matchAll(/--([a-z-]+):\s*(#[0-9a-fA-F]{6})/g)) out[m[1]] = m[2];
    return out;
}

function luminance(hex: string): number {
    const [r, g, b] = [1, 3, 5].map((i) => {
        const c = parseInt(hex.slice(i, i + 2), 16) / 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
}

const pairs: [string, string, number][] = [
    ["foreground", "background", 4.5],
    ["muted-foreground", "background", 4.5],
    ["muted-foreground", "surface", 4.5],
    ["on-accent", "accent", 4.5],
    ["accent", "background", 4.5],
    ["focus-ring", "background", 3],
    ["focus-ring", "surface", 3],
    ["border", "background", 3],
];

describe.each([
    ["light", ":root"],
    ["dark", '[data-theme="dark"]'],
])("%s theme contrast", (_name, selector) => {
    const t = tokens(selector);
    test.each(pairs)("%s on %s is at least %d:1", (fg, bg, min) => {
        expect(t[fg], `missing --${fg}`).toBeDefined();
        expect(t[bg], `missing --${bg}`).toBeDefined();
        expect(contrast(t[fg], t[bg])).toBeGreaterThanOrEqual(min);
    });
});
