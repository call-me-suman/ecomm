import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    1: {
      image: "https://picsum.photos/200",
    },
    2: {
      image: "https://picsum.photos/200",
    },
    3: {
      image: "https://picsum.photos/200",
    },
  };
  return NextResponse.json({ data });
}
