import { NextResponse } from 'next/server';
import { updateRecruit } from 'service/updateRequest';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(request: Request) {
  console.log('포폴수정 요청 데이터', request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('articleId') || '';
  const accessToken = getCookie(request, 'accessToken');
  try {
    const res = await request.formData();
    console.log('실제 서버로 요청할 데이터', res);
    const data = await updateRecruit(res, accessToken, id);
    return new Response(JSON.stringify(res), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('넥스트 서버에서 PATCH 요청 처리 중 오류 발생:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
