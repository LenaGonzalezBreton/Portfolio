// app/fonts.ts
import localFont from "next/font/local";

export const clashDisplay = localFont({
    src: [
        { path: "../public/fonts/ClashDisplay/ClashDisplay-Semibold.woff2", weight: "600" },
        { path: "../public/fonts/ClashDisplay/ClashDisplay-Bold.woff2",     weight: "700" },
    ],
    variable: "--font-clash", // <-- on nomme la variable
    display: "swap",
});

export const satoshi = localFont({
    src: [
        { path: "../public/fonts/Satoshi/Satoshi-Regular.woff2", weight: "400" },
        { path: "../public/fonts/Satoshi/Satoshi-Medium.woff2",  weight: "500" },
        { path: "../public/fonts/Satoshi/Satoshi-Bold.woff2",    weight: "700" },
    ],
    variable: "--font-satoshi", // <-- pareil
    display: "swap",
});
