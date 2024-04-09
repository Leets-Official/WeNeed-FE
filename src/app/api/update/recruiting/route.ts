import { NextResponse } from 'next/server';
import { updateRecruit } from 'service/updateRequest';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('articleId') || '';
  const accessToken = getCookie(request, 'accessToken');
  const content = await request.json();
  console.log(content, '로 넥스트 서버에서 요청');

  try {
    const data = await updateRecruit(content, accessToken, id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
