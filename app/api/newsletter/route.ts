import { NextResponse } from "next/server";
import { append, existsWhere, isEmail } from "@/app/lib/store";

type Subscriber = { email: string };

export async function POST(request: Request) {
  let body: Partial<Subscriber>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const already = await existsWhere<Subscriber>("subscribers", (r) => r.email === email);
  if (already) {
    return NextResponse.json(
      { ok: true, message: "You're already subscribed — thank you." },
      { status: 200 }
    );
  }

  await append("subscribers", { email });
  return NextResponse.json(
    { ok: true, message: "Subscribed. Gentle notes, never spam." },
    { status: 201 }
  );
}
