import { render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { axe } from "vitest-axe";
import Button from "@/app/components/ui/Button";
import Section from "@/app/components/ui/Section";

test("Button with href is a link, without is a button", () => {
    render(
        <>
            <Button href="#contact">Contact</Button>
            <Button>Send</Button>
        </>,
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
});

test("Button keeps a 44px minimum height", () => {
    render(<Button href="#x">Go</Button>);
    expect(screen.getByRole("link").className).toMatch(/min-h-11/);
});

test("Section is a region named by its title", () => {
    render(
        <Section id="projects" title="Projects">
            <p>Content</p>
        </Section>,
    );
    expect(screen.getByRole("region", { name: "Projects" })).toHaveAttribute("id", "projects");
    expect(screen.getByRole("heading", { level: 2, name: "Projects" })).toBeInTheDocument();
});

test("server HTML never hides content before hydration", () => {
    const html = renderToStaticMarkup(
        <Section id="a" title="A">
            <Button href="#x">Go</Button>
        </Section>,
    );
    expect(html).not.toMatch(/hidden|opacity-0|invisible|visibility:/);
});

test("primitives have no axe violations", async () => {
    const { container } = render(
        <Section id="a" title="A">
            <Button href="#x">Go</Button>
            <Button variant="secondary">Other</Button>
        </Section>,
    );
    expect(await axe(container)).toHaveNoViolations();
});
