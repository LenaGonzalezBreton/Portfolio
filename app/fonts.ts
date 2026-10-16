import localFont from "next/font/local";

export const satoshi = localFont({
    src: [
        { path: "../public/fonts/Satoshi/Satoshi-Regular.woff2", weight: "400" },
        { path: "../public/fonts/Satoshi/Satoshi-Medium.woff2", weight: "500" },
        { path: "../public/fonts/Satoshi/Satoshi-Bold.woff2", weight: "700" },
    ],
    variable: "--font-satoshi",
    display: "swap",
});
