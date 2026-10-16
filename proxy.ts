import { NextResponse, type NextRequest } from "next/server";
import { pickLang } from "@/app/locales";

export function proxy(request: NextRequest) {
    const lang = pickLang(request.headers.get("accept-language"), request.cookies.get("lang")?.value);
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = { matcher: ["/"] };
