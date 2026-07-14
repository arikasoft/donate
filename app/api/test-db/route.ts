import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
    });

    const [rows] = await conn.query("SELECT NOW() AS server_time");

    await conn.end();

    return NextResponse.json({
      success: true,
      rows,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      code: err.code,
      errno: err.errno,
      sqlState: err.sqlState,
      message: err.message,
    });
  }
}
