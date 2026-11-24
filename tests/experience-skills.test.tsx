import { render, screen, within } from "@testing-library/react";
import { axe } from "vitest-axe";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import { getDictionary } from "@/app/i18n/dictionary";
import { getExperience } from "@/app/data/experience";
import { getSkillGroups } from "@/app/data/skills";

test("experience items render in order with time elements", () => {
    const { container } = render(<Experience dict={getDictionary("en").experience} items={getExperience("en")} lang="en" />);
    for (const [group, names] of [
        ["Work experience", ["Vosgelis", "ARIA.bz", "Tizzy", "Eurosérum (Sodiaal Group)"]],
        ["Education", ["Epitech", "Groupe Mont Roland"]],
        ["Community involvement", ["SDIS 70", "Soror’IT"]],
    ] as const) {
        const region = screen.getByRole("region", { name: group });
        expect(within(region).getAllByRole("heading", { level: 4 }).map((h) => h.textContent)).toEqual(names);
    }
    expect(container.querySelectorAll("time").length).toBeGreaterThan(0);
    const tizzy = screen.getByRole("heading", { name: "Tizzy" }).closest("article")!;
    expect(Array.from(tizzy.querySelectorAll("time"), (time) => time.dateTime)).toEqual(["2025-08", "2025-11"]);
});

test("ongoing item shows the localized present word", () => {
    for (const [lang, word] of [["en", "Present"], ["fr", "Aujourd'hui"]] as const) {
        const { unmount } = render(<Experience dict={getDictionary(lang).experience} items={getExperience(lang)} lang={lang} />);
        const vosgelis = screen.getByRole("heading", { level: 4, name: "Vosgelis" }).closest("article")!;
        expect(within(vosgelis).getByText(new RegExp(word))).toBeInTheDocument();
        const past = screen.getByRole("region", { name: getDictionary(lang).experience.groups.community });
        expect(within(past).queryByText(new RegExp(word))).not.toBeInTheDocument();
        unmount();
    }
});

test("Epitech displays the start and expected end dates", () => {
    render(<Experience dict={getDictionary("en").experience} items={getExperience("en")} lang="en" />);
    const epitech = screen.getByRole("heading", { level: 4, name: /Epitech/ }).closest("article")!;
    expect(Array.from(epitech.querySelectorAll("time"), (time) => time.dateTime)).toEqual(["2024-09", "2027-09"]);
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
