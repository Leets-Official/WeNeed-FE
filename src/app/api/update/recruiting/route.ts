import { NextResponse } from 'next/server';
import { updateRecruit } from 'service/updateRequest';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('articleId') || '';
  const accessToken = getCookie(request, 'accessToken');
  try {
    const res = await request.formData();
    const data = await updateRecruit(res, accessToken, id);
    return new Response(JSON.stringify(res), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
