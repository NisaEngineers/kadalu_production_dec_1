// app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// THIS LINE MUST BE HERE — NO EXCEPTIONS
export const dynamic = "force-dynamic";

type UsageData = {
  plan: string;
  usage: Record<string, { used: number; limit: number }>;
};

export default function DashboardPage() {
  const [data, setData] = useState<UsageData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  // Fetch usage data
  useEffect(() => {
    if (status !== "authenticated") return;

    async function fetchUsage() {
      try {
        const res = await fetch("/api/get-usage", { credentials: "include" });
        const text = await res.text();
        let json: any;
        try {
          json = JSON.parse(text);
        } catch {
          throw new Error("Invalid JSON:\n" + text.slice(0, 200));
        }
        if (res.ok) {
          setData(json);
        } else {
          setError(json.error || "Failed to fetch");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsage();
  }, [status]);

  if (status === "loading" || loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (status === "unauthenticated") {
    return null;
  }

  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  if (!data) {
    return <div className="p-4">No data</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Plan: <strong>{data.plan}</strong></p>
      <div className="space-y-4">
        {Object.entries(data.usage).map(([feature, { used, limit }]) => {
          const percent = Math.min((used / limit) * 100, 100);
          return (
            <div key={feature} className="border p-4 rounded-lg bg-gray-50">
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium capitalize">{feature}</span>
                <span>{used}/{limit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    percent >= 100 ? "bg-red-500" : percent >= 80 ? "bg-yellow-500" : "bg-green-500"
                  }`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
