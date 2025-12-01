// app/api/vocal/proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const userId = formData.get('userId') as string | null;

    // ---- validation -------------------------------------------------
    if (!file || !userId) {
      return NextResponse.json(
        { detail: 'Missing file or userId' },
        { status: 400 }
      );
    }

    // ---- forward to the real API ------------------------------------
    const proxyForm = new FormData();
    proxyForm.append('file', file);               // only the audio file
    // userId is **in the URL path** → no need to add it to the body

    const apiResponse = await fetch(
      `https://api-vocal.monaarch.org/separate/${userId}`,
      {
        method: 'POST',
        body: proxyForm,
        // Do **not** set Content-Type – let the browser add the multipart boundary
        headers: {
          Accept: 'application/json',
        },
      }
    );

    // ---- parse response ---------------------------------------------
    const contentType = apiResponse.headers.get('content-type') ?? '';
    let data: any;

    if (contentType.includes('application/json')) {
      data = await apiResponse.json();
    } else {
      const txt = await apiResponse.text();
      data = { detail: `Unexpected response: ${txt.slice(0, 200)}` };
    }

    // ---- return exactly what the external API returned ---------------
    return NextResponse.json(data, { status: apiResponse.status });
  } catch (err: any) {
    console.error('Vocal proxy error:', err);
    return NextResponse.json(
      { detail: err.message ?? 'Proxy failed' },
      { status: 500 }
    );
  }
}
