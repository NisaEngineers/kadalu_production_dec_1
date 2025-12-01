import { openDb, initDb } from "@/lib/db";
import { PLAN_LIMITS } from "@/lib/limits";

export async function checkAndIncrementUsage(userId: number, feature: string) {
  await initDb();
  const db = await openDb();

  // Get user plan
  const planRow = await db.get("SELECT plan FROM user_plans WHERE user_id = ?", [userId]);
  const plan = planRow?.plan || "free";

  const limit = PLAN_LIMITS[plan]?.[feature] ?? 0;
  if (limit === 0) {
    return { allowed: false, reason: "Not available in your plan" };
  }

  // Get current usage
  const row = await db.get(
    "SELECT count FROM user_usage WHERE user_id = ? AND feature = ?",
    [userId, feature]
  );
  const used = row?.count || 0;

  if (used >= limit) {
    return { allowed: false, reason: "Limit reached. Please upgrade your plan." };
  }

  // Increment usage
  await db.run(
    `INSERT INTO user_usage (user_id, feature, count)
     VALUES (?, ?, 1)
     ON CONFLICT(user_id, feature) DO UPDATE SET count = count + 1`,
    [userId, feature]
  );

  return { allowed: true, used: used + 1, limit };
}
