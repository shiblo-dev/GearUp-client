import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  userId: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  exp: number;
}

const roleBasedRoutes: Record<string, string[]> = {
  "/dashboard/customer": ["CUSTOMER"],
  "/dashboard/provider": ["PROVIDER"],
  "/dashboard/admin": ["ADMIN"],
};

const authOnlyRoutes = ["/auth/login", "/auth/register"];

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getDashboardPath(role: string): string {
  switch (role) {
    case "CUSTOMER":
      return "/dashboard/customer";
    case "PROVIDER":
      return "/dashboard/provider";
    case "ADMIN":
      return "/dashboard/admin";
    default:
      return "/";
  }
}

function isTokenValid(token: string): DecodedToken | null {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const isExpired = decoded.exp * 1000 < Date.now();
    if (isExpired) return null;
    return decoded;
  } catch {
    return null;
  }
}

async function refreshAccessToken(
  refreshToken: string
): Promise<{ newAccessToken: string; setCookieHeader: string } | null> {
  try {
    const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `refreshToken=${refreshToken}`,
      },
    });

    if (!res.ok) return null;

    const setCookieHeader = res.headers.get("set-cookie");
    const data = await res.json();
    const newAccessToken = data?.data?.accessToken;

    if (!newAccessToken || !setCookieHeader) return null;

    return { newAccessToken, setCookieHeader };
  } catch {
    return null;
  }
} export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (authOnlyRoutes.some((route) => pathname.startsWith(route))) {
    if (accessToken && isTokenValid(accessToken)) {
      const decoded = isTokenValid(accessToken)!;
      return NextResponse.redirect(
        new URL(getDashboardPath(decoded.role), request.url)
      );
    }
    return NextResponse.next();
  }

  const matchedRoute = Object.keys(roleBasedRoutes).find((route) =>
    pathname.startsWith(route)
  );

  if (!matchedRoute) {
    return NextResponse.next();
  }

  if (!accessToken && !refreshToken) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken) {
    const decoded = isTokenValid(accessToken);
    if (decoded) {
      const allowedRoles = roleBasedRoutes[matchedRoute];
      if (!allowedRoles.includes(decoded.role)) {
        return NextResponse.redirect(
          new URL(getDashboardPath(decoded.role), request.url)
        );
      }
      return NextResponse.next();
    }
  }

  if (refreshToken) {
    const result = await refreshAccessToken(refreshToken);

    if (!result) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }

    const { newAccessToken, setCookieHeader } = result;
    const decoded = isTokenValid(newAccessToken);

    if (!decoded) {
      const loginUrl = new URL("/auth/login", request.url);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }

    const allowedRoles = roleBasedRoutes[matchedRoute];

    const targetUrl = allowedRoles.includes(decoded.role)
      ? request.nextUrl
      : new URL(getDashboardPath(decoded.role), request.url);

    const response = allowedRoles.includes(decoded.role)
      ? NextResponse.next()
      : NextResponse.redirect(targetUrl);

    response.headers.append("Set-Cookie", setCookieHeader);

    return response;
  }

  const loginUrl = new URL("/auth/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/login", "/auth/register"],
};