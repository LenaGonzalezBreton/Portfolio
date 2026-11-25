import { render, screen, within } from "@testing-library/react";
import { axe } from "vitest-axe";
import Projects from "@/app/components/Projects";
import WebSection from "@/app/components/WebSection";
import { getDictionary } from "@/app/i18n/dictionary";
import { getProjects } from "@/app/data/projects";

const dict = getDictionary("en");

test("renders the four projects in order", () => {
    render(<Projects dict={dict.projects} projects={getProjects("en")} />);
    const names = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(names).toEqual([dict.projects.experimentsTitle, "OPSY", "FitMe", "Copilote", "Tizzy"]);
    expect(screen.getAllByRole("article")).toHaveLength(4);
});

test("only FitMe has a safe repo link named after the project", () => {
    render(<Projects dict={dict.projects} projects={getProjects("en")} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute("href", "https://github.com/LenaGonzalezBreton/FitMe");
    expect(links[0]).toHaveAttribute("rel", "noopener noreferrer");
    expect(links[0]).toHaveAccessibleName(/FitMe/);
});

test("private projects are labelled private", () => {
    render(<Projects dict={dict.projects} projects={getProjects("en")} />);
    const opsy = screen.getByRole("heading", { name: "OPSY" }).closest("article")!;
    expect(within(opsy).getByText("Private project")).toBeInTheDocument();
});

test("web section links the reference site, has screenshot alt, shows no price", () => {
    render(<WebSection dict={dict.web} />);
    expect(screen.getByRole("link", { name: /Visit the site/ })).toHaveAttribute("href", "https://dommartinavecvous.fr");
    expect(screen.getByRole("img", { name: dict.web.screenshotAlt })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: dict.web.cta })).toHaveAttribute("href", "#contact");
    expect(document.body.textContent).not.toMatch(/€|\$/);
});

test("both sections have no axe violations in fr and en", async () => {
    for (const lang of ["en", "fr"] as const) {
        const d = getDictionary(lang);
        const { container, unmount } = render(
            <>
                <Projects dict={d.projects} projects={getProjects(lang)} />
                <WebSection dict={d.web} />
            </>,
        );
        expect(await axe(container)).toHaveNoViolations();
        unmount();
    }
});
