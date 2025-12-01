"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// THIS LINE IS REQUIRED
export const dynamic = "force-dynamic";

type DbDump = Record<string, Array<Record<string, any>>>;

export default function DbViewPage() {
  const [data, setData] = useState<DbDump | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    async function fetchDb() {
      try {
        const res = await fetch("/api/db-dump");
        const json = await res.json();
        if (res.ok) {
          setData(json.data as DbDump);
        } else {
          setError(json.error || "Failed to fetch DB");
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
    fetchDb();
  }, [status]);

  if (status === "loading") return <div className="p-8 text-center">Loading...</div>;
  if (status === "unauthenticated") return null;
  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!data) return <div className="p-4">Loading database…</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Monaarch DB Viewer</h1>
      {Object.entries(data).map(([table, rows]) => (
        <div key={table} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{table}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr>
                  {rows.length > 0 &&
                    Object.keys(rows[0]).map((col) => (
                      <th key={col} className="border px-2 py-1 bg-gray-100 text-left">
                        {col}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((val, j) => (
                      <td key={j} className="border px-2 py-1">
                        {String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
