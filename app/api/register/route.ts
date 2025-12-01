import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { openDb, initDb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (password.length < 10) {
      return NextResponse.json(
        { error: "Password must be at least 10 characters" },
        { status: 400 }
      );
    }

    await initDb();
    const db = await openDb();

    // Check if email already exists
    const existing = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const password_hash = await bcrypt.hash(password, 10);

    // Insert user
    const result = await db.run(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, password_hash]
    );

    const userId = result.lastID;

    // Insert default plan (free)
    await db.run(
      "INSERT INTO user_plans (user_id, plan, renews_at) VALUES (?, ?, ?)",
      [userId, "free", null]
    );

    return NextResponse.json({ success: true, userId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
