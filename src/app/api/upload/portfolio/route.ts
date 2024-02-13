import { NextResponse } from 'next/server';
import { uploadPortfolio } from 'service/uploadPortfolio';

export async function POST(request: Request) {
  console.log('넥스트 서버에서 받은 요청 데이터', request);
  try {
    const res = await request.formData();
    console.log('실제 서버로 요청할 데이터', res);
    const data = await uploadPortfolio(res);
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
