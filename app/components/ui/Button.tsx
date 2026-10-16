import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-base font-medium transition-opacity hover:opacity-85";
const variants: Record<Variant, string> = {
    primary: "bg-accent text-on-accent",
    secondary: "border border-border text-foreground",
};

type Props = { variant?: Variant; children: ReactNode; className?: string } & (
    | ({ href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">)
    | ({ href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">)
);

export default function Button({ variant = "primary", children, className = "", ...rest }: Props) {
    const cls = `${base} ${variants[variant]} ${className}`.trim();
    if ("href" in rest && rest.href !== undefined) {
        return (
            <a className={cls} {...rest}>
                {children}
            </a>
        );
    }
    return (
        <button type="button" className={cls} {...(rest as ComponentProps<"button">)}>
            {children}
        </button>
    );
}
