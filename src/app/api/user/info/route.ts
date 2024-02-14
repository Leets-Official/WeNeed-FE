import { NextResponse } from 'next/server';
import { postUserInfo } from 'service/userinfo';

export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const accessToken = searchParams.get('accessToken');
  console.log(`searchParams: ${searchParams}, accessToken: ${accessToken}`);

  const userInfo = await req.json();
  console.log(`userInfo: ${userInfo}`);
  const response = await postUserInfo(accessToken, userInfo);
  const data = await response.json();
  return NextResponse.json(data);
}
