import { NextResponse } from "next/server";
import { setSession } from "./app/utils/session";
import { ironOptions } from "./app/api/session/route";
export const middleware = async (request) => {
  const { sealed } = await setSession({
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    role: "admin 1",
  });
  const next = NextResponse.next();
  next.cookies.set(ironOptions.cookieName, sealed);
  return next;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
