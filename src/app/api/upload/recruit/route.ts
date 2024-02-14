import { NextResponse } from 'next/server';
import { uploadRecruit } from 'service/uploadRecruit';

export async function POST(request: Request) {
  console.log('리크루팅 작성 넥스트 서버에서 받은 요청 데이터', request);
  try {
    const res = await request.formData();
    console.log('실제 서버로 요청할 데이터', res);
    const data = await uploadRecruit(res);
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
