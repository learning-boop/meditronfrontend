import { NextRequest, NextResponse } from "next/server";

const BACKEND = process.env.NEXT_PUBLIC_API_URL ?? "https://13-127-244-179.sslip.io";

// Better Auth only trusts the production origin, so a sign-in sent straight from
// a browser on localhost is rejected with 403 INVALID_ORIGIN. Forwarding the
// request server-side lets us present the trusted origin and keeps the password
// off any cross-origin hop. Remove this once the backend adds localhost to its
// trustedOrigins list.
const TRUSTED_ORIGIN = process.env.BACKEND_TRUSTED_ORIGIN ?? "https://meditroncdc.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/auth/sign-in/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: TRUSTED_ORIGIN,
        Referer: `${TRUSTED_ORIGIN}/admin/login`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { message: "Failed to reach server. Please try again." },
      { status: 502 }
    );
  }
}
