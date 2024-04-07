import { NextResponse } from 'next/server';
import { uploadPortfolio } from 'service/uploadRequest';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken');
  console.log(accessToken);

  const content = await request.json();
  console.log(content, '로 넥스트 서버에서 요청');

  try {
    const data = await uploadPortfolio(content, accessToken);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
