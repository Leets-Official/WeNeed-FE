import { NextResponse } from 'next/server';
import { uploadPortfolio } from 'service/uploadRequest';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken');
  try {
    const res = await request.formData();
    const data = await uploadPortfolio(res, accessToken);
    return new Response(JSON.stringify(res), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
