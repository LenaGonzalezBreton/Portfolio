import { NextRequest } from "next/server";
import { pickLang } from "@/app/locales";
import { proxy, config } from "@/proxy";

describe("pickLang", () => {
    test("prefers the best supported language in Accept-Language", () => {
        expect(pickLang("fr-FR,fr;q=0.9,en;q=0.8")).toBe("fr");
    });
    test("falls back to en for unsupported or missing languages", () => {
        expect(pickLang("de-DE")).toBe("en");
        expect(pickLang(null)).toBe("en");
        expect(pickLang("")).toBe("en");
        expect(pickLang("*;q=0.5,;;;")).toBe("en");
    });
    test("a valid cookie overrides the header, an invalid one is ignored", () => {
        expect(pickLang("en-US", "fr")).toBe("fr");
        expect(pickLang("fr-FR", "xx")).toBe("fr");
    });
});

describe("proxy", () => {
    test("redirects / to the visitor's language", () => {
        const res = proxy(new NextRequest("http://localhost/", { headers: { "accept-language": "fr-FR,fr;q=0.9" } }));
        expect(res.status).toBe(307);
        expect(new URL(res.headers.get("location")!).pathname).toBe("/fr");
    });
    test("cookie wins over header", () => {
        const res = proxy(new NextRequest("http://localhost/", { headers: { "accept-language": "en", cookie: "lang=fr" } }));
        expect(new URL(res.headers.get("location")!).pathname).toBe("/fr");
    });
    test("only matches the root path", () => {
        expect(config.matcher).toEqual(["/"]);
    });
});
