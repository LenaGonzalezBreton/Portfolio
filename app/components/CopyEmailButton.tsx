"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmailButton({
    email,
    copyLabel,
    copiedLabel,
}: {
    email: string;
    copyLabel: string;
    copiedLabel: string;
}) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            /* Clipboard API unavailable: the mailto link next to the button still works */
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
                {copied ? <Check aria-hidden className="size-5" /> : <Copy aria-hidden className="size-5" />}
            </button>
            <span role="status" className="sr-only">
                {copied ? copiedLabel : ""}
            </span>
        </>
    );
}
