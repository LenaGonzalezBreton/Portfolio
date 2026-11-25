"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmailButton({
    email,
    copyLabel,
    copiedLabel,
    failedLabel,
}: {
    email: string;
    copyLabel: string;
    copiedLabel: string;
    failedLabel: string;
}) {
    const [feedback, setFeedback] = useState<"copied" | "failed" | null>(null);

    async function copy() {
        try {
            await navigator.clipboard.writeText(email);
            setFeedback("copied");
        } catch {
            setFeedback("failed");
        }
    }

    return (
        <>
            <button
                type="button"
                onClick={copy}
                aria-label={copyLabel}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border hover:bg-surface"
            >
                {feedback === "copied" ? <Check aria-hidden className="size-5" /> : <Copy aria-hidden className="size-5" />}
            </button>
            <span role="status" className={feedback ? "w-full text-sm text-muted-foreground" : "sr-only"}>
                {feedback === "copied" ? copiedLabel : feedback === "failed" ? failedLabel : ""}
            </span>
        </>
    );
}
