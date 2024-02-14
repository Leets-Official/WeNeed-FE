import { NextResponse } from 'next/server';
import { useRecoilValue } from 'recoil';
import { userInfoState } from 'recoil/userinfo';
import { postUserInfo } from 'service/userinfo';

export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const accessToken = searchParams.get('accessToken');
  console.log(`searchParams: ${searchParams}, accessToken: ${accessToken}`);
  const userInfo = useRecoilValue(userInfoState);
  console.log('userInfo POST recoil : ', userInfo);
  console.log('userInfo POST json : ', JSON.stringify(userInfo));

  const response = await postUserInfo(accessToken, userInfo);
  const data = await response.json();
  return NextResponse.json(data);
}
