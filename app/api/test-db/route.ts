import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT NOW() AS server_time");

    return NextResponse.json({
      success: true,
      message: "Database Connected Successfully",
      rows,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Database Connection Failed",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
