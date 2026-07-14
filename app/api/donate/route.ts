import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, mobile, email, amount } = body;

    if (!name || !mobile || !email || !amount) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    await db.execute(
      "INSERT INTO donations (name, mobile, email, amount) VALUES (?, ?, ?, ?)",
      [name, mobile, email, amount]
    );

    return NextResponse.json({
      success: true,
      message: "Donation saved successfully!",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
      },
      { status: 500 }
    );
  }
}