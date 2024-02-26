import { NextResponse } from 'next/server';
import { uploadRecruit } from 'service/uploadRequest';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken');
  console.log('리크루팅 작성 넥스트 서버 요청 데이터', request);
  try {
    const res = await request.formData();
    console.log('실제 서버로 요청할 데이터', res);
    const data = await uploadRecruit(res, accessToken);
    return new Response(JSON.stringify(res), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('넥스트 서버에서 POST 요청 처리 중 오류 발생:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
