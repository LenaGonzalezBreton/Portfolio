import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import Navbar from "@/app/components/Navbar";
import LangSwitch from "@/app/components/LangSwitch";
import { getDictionary } from "@/app/i18n/dictionary";

const preventNavigation = (e: Event) => e.preventDefault();
beforeEach(() => {
    document.addEventListener("click", preventNavigation);
    document.cookie = "lang=; max-age=0; path=/";
});
afterEach(() => document.removeEventListener("click", preventNavigation));

function setup(lang: "fr" | "en" = "en") {
    return render(<Navbar lang={lang} dict={getDictionary(lang).nav} name="Léna Gonzalez Breton" />);
}

test("navigation links point to every section anchor", () => {
    setup();
    const nav = screen.getByRole("navigation", { name: "Main navigation" });
    const hrefs = Array.from(nav.querySelectorAll("a")).map((a) => a.getAttribute("href"));
    expect(hrefs).toEqual(["#projects", "#web", "#experience", "#skills", "#contact"]);
});

test("french labels are used on the fr route", () => {
    setup("fr");
    expect(screen.getByRole("navigation", { name: "Navigation principale" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Compétences" })).toBeInTheDocument();
});

test("language switch on fr links to /en with hreflang and lang", () => {
    render(<LangSwitch lang="fr" label="English" />);
    const link = screen.getByRole("link", { name: "English" });
    expect(link).toHaveAttribute("href", "/en");
    expect(link).toHaveAttribute("hreflang", "en");
    expect(link).toHaveAttribute("lang", "en");
});

test("clicking the language switch stores the preference cookie", async () => {
    render(<LangSwitch lang="en" label="Français" />);
    await userEvent.click(screen.getByRole("link", { name: "Français" }));
    expect(document.cookie).toContain("lang=fr");
});

test("mobile menu button toggles aria-expanded and Escape closes it", async () => {
    setup();
    const button = screen.getByRole("button", { name: "Menu" });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.keyboard("{Escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
});

test("selecting a link closes the menu", async () => {
    setup();
    const button = screen.getByRole("button", { name: "Menu" });
    await userEvent.click(button);
    await userEvent.click(screen.getByRole("link", { name: "Projects" }));
    expect(button).toHaveAttribute("aria-expanded", "false");
});

test("navbar has no axe violations in both languages", async () => {
    for (const lang of ["en", "fr"] as const) {
        const { container, unmount } = setup(lang);
        expect(await axe(container)).toHaveNoViolations();
        unmount();
    }
});
