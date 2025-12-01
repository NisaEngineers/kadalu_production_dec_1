// app/api/vocal/proxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const userId = formData.get('userId') as string;

    if (!file || !userId) {
      return NextResponse.json(
        { detail: 'Missing file or userId' },
        { status: 400 }
      );
    }

    const proxyForm = new FormData();
    proxyForm.append('file', file);

    const response = await fetch(`https://api-advance.monaarch.org/separate/${userId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: proxyForm,
    });

    let data: any;
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { detail: `Unexpected response: ${text.substring(0, 200)}` };
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { detail: error.message || 'Proxy failed' },
      { status: 500 }
    );
  }
}
