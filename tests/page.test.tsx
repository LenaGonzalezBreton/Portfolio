import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import Page from "@/app/[lang]/page";

const lang = (l: string) => ({ params: Promise.resolve({ lang: l }) });

test.each(["fr", "en"])("assembles every section in order for %s", async (l) => {
    render(await Page(lang(l)));
    expect(screen.getAllByRole("main")).toHaveLength(1);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    const ids = Array.from(document.querySelectorAll("main > section[id]")).map((s) => s.id);
    expect(ids).toEqual(["projects", "web", "experience", "skills", "contact"]);
    expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(5);
});

test.each(["fr", "en"])("whole page has no axe violations for %s", async (l) => {
    const { container } = render(await Page(lang(l)));
    expect(await axe(container)).toHaveNoViolations();
});

test("unknown language triggers notFound", async () => {
    await expect(Page(lang("de"))).rejects.toThrow();
});
