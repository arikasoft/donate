import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    passwordLength: process.env.DB_PASSWORD?.length ?? 0,
  });
}
