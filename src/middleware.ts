import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;
  const { origin, pathname } = nextUrl;
  const accessToken = cookies.get('accessToken');
  const refreshToken = cookies.get('refreshToken');
  console.log('Middleware acessToken:', accessToken);
  console.log('Middleware refreshToken:', refreshToken);
  if (accessToken && refreshToken) {
    return NextResponse.next();
  }
}
