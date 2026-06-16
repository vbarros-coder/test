import { NextResponse } from "next/server";
import { resources } from "@/app/lib/resources";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const data = category
    ? resources.filter((r) => r.category.toLowerCase() === category.toLowerCase())
    : resources;

  return NextResponse.json({ resources: data });
}
