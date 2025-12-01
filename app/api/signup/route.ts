import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { openDb, initDb } from "@/lib/db";
import { PLAN_LIMITS } from "@/lib/limits";

// Helper to seed usage rows for a given plan
async function seedUserUsage(userId: number, plan: string) {
  await initDb();
  const db = await openDb();

  const features = Object.keys(PLAN_LIMITS[plan] || {});
  for (const feature of features) {
    await db.run(
      `INSERT OR IGNORE INTO user_usage (user_id, feature, count)
       VALUES (?, ?, 0)`,
      [userId, feature]
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, password, plan } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Only allow free or basic
    const chosenPlan = plan === "basic" ? "basic" : "free";

    await initDb();
    const db = await openDb();

    // Check if user already exists
    const existing = await db.get("SELECT id FROM users WHERE email = ?", [email]);
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert user
    const result = await db.run(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, passwordHash]
    );
    const userId = result.lastID;
    if (userId === undefined) {
      throw new Error("Failed to create user: no lastID returned");
      }




    // Assign plan
    await db.run("INSERT INTO user_plans (user_id, plan) VALUES (?, ?)", [
      userId,
      chosenPlan,
    ]);

    // Seed usage rows
    await seedUserUsage(userId, chosenPlan);

    return NextResponse.json({
      success: true,
      user: { id: userId, name, email, plan: chosenPlan },
    });
  } catch (err: any) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
