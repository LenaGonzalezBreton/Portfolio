import { cvHref } from "@/app/data/cv";

test("cvHref is undefined while the PDF is absent", () => {
    expect(cvHref("fr")).toBeUndefined();
    expect(cvHref("en")).toBeUndefined();
});
