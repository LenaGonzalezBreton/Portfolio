import { vi } from "vitest";

vi.mock("@/app/fonts", () => ({ satoshi: { variable: "font-satoshi" } }));
vi.mock("@vercel/analytics/react", () => ({ Analytics: () => null }));

import Layout, { generateStaticParams, generateMetadata } from "@/app/[lang]/layout";

test("renders html with the route language", async () => {
    const fr = await Layout({ children: null, params: Promise.resolve({ lang: "fr" }) });
    const en = await Layout({ children: null, params: Promise.resolve({ lang: "en" }) });
    expect(fr.props.lang).toBe("fr");
    expect(en.props.lang).toBe("en");
});

test("unknown language triggers notFound", async () => {
    await expect(Layout({ children: null, params: Promise.resolve({ lang: "de" }) })).rejects.toThrow();
});

test("static params cover both languages", async () => {
    expect(await generateStaticParams()).toEqual([{ lang: "fr" }, { lang: "en" }]);
});

test("metadata is localized", async () => {
    const fr = await generateMetadata({ params: Promise.resolve({ lang: "fr" }) });
    const en = await generateMetadata({ params: Promise.resolve({ lang: "en" }) });
    expect(fr.description).not.toBe(en.description);
    expect(fr.alternates?.languages).toMatchObject({ fr: "/fr", en: "/en" });
});

test("skip link is the first element in body", async () => {
    const html = await Layout({ children: null, params: Promise.resolve({ lang: "en" }) });
    const body = (html.props.children as React.ReactElement[]).find((c) => c.type === "body")!;
    const first = (body.props.children as React.ReactElement[])[0];
    expect(first.type).toBe("a");
    expect(first.props.href).toBe("#main");
});
