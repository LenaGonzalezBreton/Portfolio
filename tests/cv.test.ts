import { cvHref } from "@/app/data/cv";

test("each language links to its own downloadable PDF", () => {
    expect(cvHref("fr")).toBe("/cv/cv-fr.pdf");
    expect(cvHref("en")).toBe("/cv/cv-en.pdf");
});
