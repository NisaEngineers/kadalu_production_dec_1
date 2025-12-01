import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { checkAndIncrementUsage } from "@/lib/usage";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export async function POST(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const token = auth.replace("Bearer ", "");
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id;

    await checkAndIncrementUsage(userId, "advance_splitter");

    const formData = await req.formData();
    formData.set("task", "Advanced Split");

    const fastApiRes = await fetch("http://127.0.0.1:8000/process-audio/", {
      method: "POST",
      body: formData,
    });

    const data = await fastApiRes.json();
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 403 });
  }
}
