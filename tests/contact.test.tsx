import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import { getDictionary } from "@/app/i18n/dictionary";
import { site } from "@/app/data/site";

const dict = getDictionary("en");

test("email is a mailto link with the exact address and wraps", () => {
    render(<Contact dict={dict.contact} />);
    const link = screen.getByRole("link", { name: site.email });
    expect(link).toHaveAttribute("href", `mailto:${site.email}`);
    expect(link.className).toMatch(/break-all|break-words|\[overflow-wrap:anywhere\]/);
});

test("copy button copies the address and announces it politely", async () => {
    const user = userEvent.setup();
    render(<Contact dict={dict.contact} />);
    await user.click(screen.getByRole("button", { name: dict.contact.copy }));
    expect(await navigator.clipboard.readText()).toBe(site.email);
    expect(screen.getByRole("status")).toHaveTextContent(dict.contact.copied);
});

test("copy button does not throw without the Clipboard API", () => {
    Object.defineProperty(navigator, "clipboard", { value: undefined, configurable: true });
    render(<Contact dict={dict.contact} />);
    expect(() => fireEvent.click(screen.getByRole("button", { name: dict.contact.copy }))).not.toThrow();
    expect(screen.getByRole("link", { name: site.email })).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent(dict.contact.copyFailed);
});

test("social links have accessible names and safe rel", () => {
    render(<Contact dict={dict.contact} />);
    for (const name of ["LinkedIn", "GitHub"]) {
        const link = screen.getByRole("link", { name });
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", site.linkedin);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", site.github);
});

test("contact section and footer have no axe violations in fr and en", async () => {
    for (const lang of ["en", "fr"] as const) {
        const d = getDictionary(lang);
        const { container, unmount } = render(
            <>
                <Contact dict={d.contact} />
                <Footer dict={d.footer} name={site.name} />
            </>,
        );
        expect(await axe(container)).toHaveNoViolations();
        unmount();
    }
});
