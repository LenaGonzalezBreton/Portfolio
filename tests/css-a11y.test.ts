import { readFileSync } from "node:fs";
import path from "node:path";

const css = readFileSync(path.join(__dirname, "../app/globals.css"), "utf8");

test("anchors and focus are not hidden under the sticky header (WCAG 2.4.11)", () => {
    const html = css.match(/html\s*\{[^}]*\}/g)?.join("\n") ?? "";
    expect(html).toMatch(/scroll-padding-top:\s*5rem/);
});
