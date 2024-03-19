import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { origin, pathname } = nextUrl;
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');
  console.log('Middleware acessToken:', accessToken);
  console.log('Middleware refreshToken:', refreshToken);

  if (accessToken && refreshToken) {
    const accessTokenString = accessToken.value;
    const payload = accessTokenString.split('.')[1];
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/refresh?refreshToken=${refreshToken}`,
      );
    } catch (error) {
      console.error('토큰 갱신 에러:', error);
      throw error;
    }
  }

  // if (accessToken && refreshToken) {
  //   return NextResponse.next();
  // }
}
