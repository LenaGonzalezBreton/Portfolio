import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import Hero from "@/app/components/Hero";
import { getDictionary } from "@/app/i18n/dictionary";

function setup(cvHref?: string, lang: "fr" | "en" = "en") {
    return render(<Hero lang={lang} dict={getDictionary(lang).hero} name="Léna Gonzalez Breton" cvHref={cvHref} />);
}

test("h1 is the name and carries no job title", () => {
    setup();
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Léna Gonzalez Breton");
    expect(h1.textContent).not.toMatch(/product owner|devops|développeuse/i);
});

test("pitch and availability render", () => {
    setup();
    expect(screen.getByText(/I design and ship products/)).toBeInTheDocument();
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
