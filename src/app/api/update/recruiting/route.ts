import { NextResponse } from 'next/server';
import { updateRecruit } from 'service/updateRequest';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('articleId') || '';
  const accessToken = getCookie(request, 'accessToken');
  const content = await request.json();

  try {
    const data = await updateRecruit(content, accessToken, id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
