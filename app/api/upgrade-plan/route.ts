import { NextResponse } from "next/server";
import { openDb, initDb } from "@/lib/db";

// Allowed plans
const VALID_PLANS = ["free", "beginner", "hobbyist", "producer"];

export async function POST(req: Request) {
  try {
    const { userId, plan } = await req.json();

    if (!userId || !plan) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!VALID_PLANS.includes(plan)) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    await initDb();
    const db = await openDb();

    // Check if user exists
    const user = await db.get("SELECT * FROM users WHERE id = ?", [userId]);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Upsert into user_plans
    const existing = await db.get("SELECT * FROM user_plans WHERE user_id = ?", [userId]);
    if (existing) {
      await db.run("UPDATE user_plans SET plan = ?, renews_at = ? WHERE user_id = ?", [
        plan,
        null, // you can set a renewal date if you want
        userId,
      ]);
    } else {
      await db.run("INSERT INTO user_plans (user_id, plan, renews_at) VALUES (?, ?, ?)", [
        userId,
        plan,
        null,
      ]);
    }

    return NextResponse.json({ success: true, userId, plan });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
