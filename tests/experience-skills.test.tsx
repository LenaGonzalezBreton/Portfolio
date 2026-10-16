import { render, screen, within } from "@testing-library/react";
import { axe } from "vitest-axe";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import { getDictionary } from "@/app/i18n/dictionary";
import { getExperience } from "@/app/data/experience";
import { getSkillGroups } from "@/app/data/skills";

test("experience items render in order with time elements", () => {
    const { container } = render(<Experience dict={getDictionary("en").experience} items={getExperience("en")} lang="en" />);
    const orgs = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(orgs[0]).toContain("Tizzy");
    expect(orgs[1]).toContain("Eurosérum");
    expect(container.querySelectorAll("time").length).toBeGreaterThan(0);
    expect(container.querySelector('time[datetime="2024-09"]')).not.toBeNull();
});

test("ongoing item shows the localized present word", () => {
    for (const [lang, word] of [["en", "Present"], ["fr", "Aujourd'hui"]] as const) {
        const { unmount } = render(<Experience dict={getDictionary(lang).experience} items={getExperience(lang)} lang={lang} />);
        const sdis = screen.getByRole("heading", { level: 3, name: /SDIS 70/ }).closest("article")!;
        expect(within(sdis).getByText(new RegExp(word))).toBeInTheDocument();
        unmount();
    }
});

test("entry without dates renders without a time element or crash", () => {
    render(<Experience dict={getDictionary("en").experience} items={getExperience("en")} lang="en" />);
    const epitech = screen.getByRole("heading", { level: 3, name: /Epitech/ }).closest("article")!;
    expect(epitech.querySelector("time")).toBeNull();
});

test("skills are grouped plain lists with no ratings", () => {
    render(<Skills dict={getDictionary("en").skills} groups={getSkillGroups("en")} />);
    const groups = getSkillGroups("en");
    for (const g of groups) {
        expect(screen.getByRole("heading", { level: 3, name: g.label })).toBeInTheDocument();
    }
    expect(screen.queryByRole("progressbar")).toBeNull();
    expect(document.body.textContent).not.toMatch(/%/);
});

test("both sections have no axe violations in fr and en", async () => {
    for (const lang of ["en", "fr"] as const) {
        const d = getDictionary(lang);
        const { container, unmount } = render(
            <>
                <Experience dict={d.experience} items={getExperience(lang)} lang={lang} />
                <Skills dict={d.skills} groups={getSkillGroups(lang)} />
            </>,
        );
        expect(await axe(container)).toHaveNoViolations();
        unmount();
    }
});
