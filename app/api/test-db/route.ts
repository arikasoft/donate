import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    DB_HOST: process.env.DB_HOST || "NOT FOUND",
    DB_USER: process.env.DB_USER || "NOT FOUND",
    DB_NAME: process.env.DB_NAME || "NOT FOUND",
    DB_PORT: process.env.DB_PORT || "NOT FOUND",
  });
}
