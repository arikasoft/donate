import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      database: process.env.DB_NAME!,
      port: 3306,
    });

    const [rows] = await conn.query("SELECT CURRENT_USER() AS user, DATABASE() AS db");

    await conn.end();

    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({
      code: err.code,
      errno: err.errno,
      sqlState: err.sqlState,
      message: err.message,
    });
  }
}
