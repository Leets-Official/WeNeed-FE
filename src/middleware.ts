import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import base64, { decode } from 'js-base64';

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { origin, pathname } = nextUrl;
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');
  //console.log('Middleware acessToken:', accessToken);
  //console.log('Middleware refreshToken:', refreshToken);

  if (accessToken && refreshToken) {
    const accessTokenString = accessToken.value;
    const payload = accessTokenString.split('.')[1];
    const currentTime = Date.now() / 1000;
    const tokenExpirationTime = JSON.parse(decode(payload)).exp;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/refresh?refreshToken=${refreshToken}`,
      );
      //console.log('토큰 갱신 response:', response);
    } catch (error) {
      console.error('토큰 갱신 에러:', error);
      throw error;
    }
  }

  // if (accessToken && refreshToken) {
  //   return NextResponse.next();
  // }
}
