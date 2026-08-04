import { NextRequest, NextResponse } from "next/server";

const BACKEND = process.env.NEXT_PUBLIC_API_URL ?? "https://13-127-244-179.sslip.io";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${BACKEND}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
