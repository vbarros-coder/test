import { NextResponse } from "next/server";
import { append, isEmail } from "@/app/lib/store";

type Message = { name: string; email: string; message: string };

export async function POST(request: Request) {
  let body: Partial<Message>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2) {
    return NextResponse.json({ error: "Please tell us your name." }, { status: 422 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Please share a little more (at least 10 characters)." },
      { status: 422 }
    );
  }

  await append("messages", { name, email, message });
  return NextResponse.json(
    { ok: true, message: "Thank you for reaching out — we'll reply within 2 working days." },
    { status: 201 }
  );
}
