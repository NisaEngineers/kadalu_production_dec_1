import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";   // 👈 fixed import
import { authOptions } from "@/lib/auth";
import { openDb, initDb } from "@/lib/db";
import { PLAN_LIMITS } from "@/lib/limits";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    await initDb();
    const db = await openDb();

    const planRow = await db.get(
      "SELECT plan FROM user_plans WHERE user_id = ?",
      [userId]
    );
    const plan = planRow?.plan || "free";

    const usageRows = await db.all(
      "SELECT feature, count FROM user_usage WHERE user_id = ?",
      [userId]
    );
    const usage: Record<string, number> = {};
    usageRows.forEach((row: any) => {
      usage[row.feature] = row.count;
    });

    const limits = PLAN_LIMITS[plan] || {};
    const result: Record<string, { used: number; limit: number }> = {};
    for (const feature in limits) {
      result[feature] = {
        used: usage[feature] || 0,
        limit: limits[feature],
      };
    }

    return NextResponse.json({ plan, usage: result });
  } catch (err: any) {
    console.error("get-usage error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
