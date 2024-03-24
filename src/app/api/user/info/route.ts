import { NextResponse } from 'next/server';
import { postUserInfo } from 'service/userinfo';
import { getCookie } from 'utils/cookieUtils';

export async function POST(req: Request): Promise<NextResponse> {
  const accessToken = getCookie(req, 'accessToken');

  const userInfo = await req.json();
  console.log(`userInfo: ${userInfo}`);
  const response = await postUserInfo(accessToken, userInfo);
  const data = await response.json();
  return NextResponse.json(data);
}
