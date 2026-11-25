import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { themeInitScript } from "@/app/theme-script";
import ThemeToggle from "@/app/components/ThemeToggle";

function mockSystem(dark: boolean) {
    window.matchMedia = (query) => ({
        matches: dark && query.includes("dark"),
        media: query,
        onchange: null,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent: () => true,
    });
}

function runScript() {
    new Function(themeInitScript)();
}

beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
});

describe("themeInitScript", () => {
    test("stored choice wins over the system preference", () => {
        mockSystem(false);
        localStorage.setItem("theme", "dark");
        runScript();
        expect(document.documentElement.dataset.theme).toBe("dark");
    });
    test("falls back to the system preference", () => {
        mockSystem(true);
        runScript();
        expect(document.documentElement.dataset.theme).toBe("dark");
    });
    test("survives a throwing localStorage", () => {
        mockSystem(true);
        const spy = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
            throw new Error("blocked");
        });
        expect(() => runScript()).not.toThrow();
        expect(document.documentElement.dataset.theme).toBe("dark");
        spy.mockRestore();
    });
});

describe("ThemeToggle", () => {
    test("flips the attribute, persists it and reflects state", async () => {
        mockSystem(false);
        document.documentElement.dataset.theme = "light";
        render(<ThemeToggle label="Toggle dark mode" />);
        const button = screen.getByRole("button", { name: "Toggle dark mode" });
        expect(button).toHaveAttribute("aria-pressed", "false");
        await userEvent.click(button);
        expect(document.documentElement.dataset.theme).toBe("dark");
        expect(localStorage.getItem("theme")).toBe("dark");
        expect(button).toHaveAttribute("aria-pressed", "true");
    });
    test("has a 44px touch target and no axe violations", async () => {
        const { container } = render(<ThemeToggle label="Toggle dark mode" />);
        expect(screen.getByRole("button").className).toMatch(/min-h-11/);
        expect(await axe(container)).toHaveNoViolations();
    });
});
