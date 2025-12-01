import { NextResponse } from "next/server";
import { openDb, initDb } from "@/lib/db";

export async function GET() {
  try {
    await initDb();
    const db = await openDb();

    // Example: dump all tables
    const tables = await db.all(
      "SELECT name FROM sqlite_master WHERE type='table'"
    );

    const result: Record<string, any[]> = {};

    for (const t of tables) {
      const rows = await db.all(`SELECT * FROM ${t.name} LIMIT 50`);
      result[t.name] = rows;
    }

    return NextResponse.json({ success: true, data: result });
  } catch (err: any) {
    console.error("DB dump error:", err);
    return NextResponse.json({ error: "Failed to fetch DB" }, { status: 500 });
  }
}
