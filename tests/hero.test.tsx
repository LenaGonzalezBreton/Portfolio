import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import Hero from "@/app/components/Hero";
import { getDictionary } from "@/app/i18n/dictionary";

function setup(cvHref?: string, lang: "fr" | "en" = "en") {
    return render(<Hero lang={lang} dict={getDictionary(lang).hero} cvHref={cvHref} />);
}

test.each([
    ["fr", "Cloud & DevOps"],
    ["en", "Cloud & DevOps"],
] as const)("h1 shows the professional focus in %s", (lang, title) => {
    setup(undefined, lang);
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
});

test("pitch and availability render", () => {
    setup();
    expect(screen.getByText(/pursuing cloud and DevOps engineering/)).toBeInTheDocument();
    expect(screen.getByText(/permanent role from 2027/)).toBeInTheDocument();
});

test("contact button links to #contact", () => {
    setup();
    expect(screen.getByRole("link", { name: "Contact me" })).toHaveAttribute("href", "#contact");
});

test("CV link downloads the given file", () => {
    setup("/cv/cv-en.pdf");
    const link = screen.getByRole("link", { name: "Download CV" });
    expect(link).toHaveAttribute("href", "/cv/cv-en.pdf");
    expect(link).toHaveAttribute("download");
});

test("no CV link when the file is missing", () => {
    setup(undefined);
    expect(screen.queryByRole("link", { name: /CV/ })).not.toBeInTheDocument();
});

test("photo has alt text", () => {
    setup();
    expect(screen.getByRole("img", { name: "Portrait of Léna Gonzalez Breton" })).toBeInTheDocument();
});

test("hero has no axe violations in both languages", async () => {
    for (const lang of ["en", "fr"] as const) {
        const { container, unmount } = setup("/cv/cv-x.pdf", lang);
        expect(await axe(container)).toHaveNoViolations();
        unmount();
    }
});
