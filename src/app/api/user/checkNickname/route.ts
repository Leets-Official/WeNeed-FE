import { NextResponse } from 'next/server';
import { checkNickname } from 'service/userinfo';

export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const nickName = searchParams.get('nickName');
  console.log(`searchParams: ${searchParams}, nickName: ${nickName}`);

  if (!nickName) {
    throw new Error('nickname is required');
  }
  const response = await checkNickname(nickName);
  console.log('check nickname response: ', response);
  return NextResponse.json(response);
}
