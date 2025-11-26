import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning";
    className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
    const variants = {
        primary: "bg-primary/10 text-primary border-primary/20",
        secondary: "bg-ink/5 text-ink/70 border-ink/10",
        success: "bg-green-50 text-green-700 border-green-200",
        warning: "bg-amber-50 text-amber-700 border-amber-200",
    };

    return (
        <span className={`
            inline-flex items-center gap-1
            px-3 py-1 rounded-full
            text-xs font-medium
            border
            ${variants[variant]}
            ${className}
        `}>
            {children}
        </span>
    );
}
