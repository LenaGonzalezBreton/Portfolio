import { getDictionary } from "@/app/i18n/dictionary";
import { getProjects } from "@/app/data/projects";
import { getExperience } from "@/app/data/experience";
import { getSkillGroups } from "@/app/data/skills";
import { isLang, locales, defaultLang } from "@/app/locales";

function keyPaths(obj: unknown, prefix = ""): string[] {
    if (typeof obj !== "object" || obj === null) return [prefix];
    return Object.entries(obj).flatMap(([k, v]) => keyPaths(v, prefix ? `${prefix}.${k}` : k));
}

function strings(obj: unknown): string[] {
    if (typeof obj === "string") return [obj];
    if (typeof obj === "object" && obj !== null) return Object.values(obj).flatMap(strings);
    return [];
}

test("fr and en dictionaries have identical keys and no empty strings", () => {
    const fr = getDictionary("fr");
    const en = getDictionary("en");
    expect(keyPaths(fr).sort()).toEqual(keyPaths(en).sort());
    for (const s of [...strings(fr), ...strings(en)]) expect(s.trim()).not.toBe("");
});

test("exactly the four chosen projects, only FitMe has a repo", () => {
    const projects = getProjects("en");
    expect(projects.map((p) => p.id)).toEqual(["opsy", "fitme", "copilote", "tizzy"]);
    expect(projects.filter((p) => p.repo).map((p) => p.id)).toEqual(["fitme"]);
    expect(projects.find((p) => p.id === "fitme")?.repo).toBe("https://github.com/LenaGonzalezBreton/FitMe");
});

test("fr and en content arrays line up", () => {
    expect(getProjects("fr").map((p) => p.id)).toEqual(getProjects("en").map((p) => p.id));
    expect(getExperience("fr").map((e) => e.id)).toEqual(getExperience("en").map((e) => e.id));
    expect(getSkillGroups("fr").length).toBe(getSkillGroups("en").length);
});

test("no skill ratings and short project descriptions", () => {
    for (const lang of locales) {
        for (const g of getSkillGroups(lang)) for (const item of g.items) expect(item).not.toMatch(/\d+\s?%/);
        for (const p of getProjects(lang)) expect(p.description.length).toBeLessThanOrEqual(160);
    }
});

test("isLang accepts fr/en only and default is en", () => {
    expect(isLang("fr")).toBe(true);
    expect(isLang("en")).toBe(true);
    expect(isLang("de")).toBe(false);
    expect(defaultLang).toBe("en");
});
