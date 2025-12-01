import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { checkAndIncrementUsage } from "@/lib/usage";
import { authOptions } from "@/lib/auth"; // adjust path to your NextAuth config

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const userId = Number(session.user.id);


  try {
    await checkAndIncrementUsage(userId, "vocal_remove");
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 403 });
  }

  // Forward to FastAPI
  const formData = await req.formData();
  const fastApiRes = await fetch("http://localhost:8000/process-audio/", {
    method: "POST",
    body: formData,
  });

  const data = await fastApiRes.json();
  return NextResponse.json(data);
}
