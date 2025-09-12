import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getTenantFromRequest } from "@/lib/tenant"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const hostname = request.headers.get("host")!

  // Get tenant from subdomain or custom domain
  const tenantSlug = getTenantFromRequest(request)

  // Handle main domain routes (admin, dashboard, marketing pages)
  if (!tenantSlug) {
    // Allow main domain routes to pass through
    if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard") || pathname === "/") {
      return NextResponse.next()
    }

    // Redirect unknown routes on main domain to homepage
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Handle tenant subdomain routes
  if (tenantSlug) {
    // If the path doesn't start with /storefront, rewrite it
    if (!pathname.startsWith("/storefront")) {
      return NextResponse.rewrite(new URL(`/storefront/${tenantSlug}${pathname}`, request.url))
    }

    // If it already starts with /storefront but has wrong tenant, fix it
    const pathTenant = pathname.split("/")[2]
    if (pathTenant !== tenantSlug) {
      const newPath = pathname.replace(`/storefront/${pathTenant}`, `/storefront/${tenantSlug}`)
      return NextResponse.rewrite(new URL(newPath, request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
