import { NextResponse } from "next/server";
import { append, existsWhere, isEmail } from "@/app/lib/store";

type Signup = { name: string; email: string };

export async function POST(request: Request) {
  let body: Partial<Signup>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Please tell us your name." }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const already = await existsWhere<Signup>("waitlist", (r) => r.email === email);
  if (already) {
    return NextResponse.json(
      { ok: true, message: "You're already on the list — welcome back." },
      { status: 200 }
    );
  }

  await append("waitlist", { name, email });
  return NextResponse.json(
    { ok: true, message: "You're in. We'll be in touch soon." },
    { status: 201 }
  );
}

export async function GET() {
  const { readAll } = await import("@/app/lib/store");
  const rows = await readAll<Signup>("waitlist");
  return NextResponse.json({ count: rows.length });
}
