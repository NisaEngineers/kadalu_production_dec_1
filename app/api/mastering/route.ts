import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { checkAndIncrementUsage } from "@/lib/usage";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = Number(session.user.id);   // 👈 cast string → number
  const check = await checkAndIncrementUsage(userId, "mixing_mastering");


  if (!check.allowed) {
    return NextResponse.json({ error: check.reason }, { status: 403 });
  }

  // ✅ Run your mastering logic here
  return NextResponse.json({
    success: true,
    message: `Mastering used ${check.used}/${check.limit}`,
  });
}
