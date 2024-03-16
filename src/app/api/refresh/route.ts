import { NextResponse } from 'next/server';
import { getRefreshToken } from 'service/getRefreshToken';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const refreshToken = searchParams.get('refreshToken');

  if (!refreshToken) {
    return NextResponse.json({ error: 'refreshToken is null' });
  }

  try {
    const response = await getRefreshToken(refreshToken as string);
    console.log(
      '미들웨어 리스폰스입니다 : : : : : : : : ',
      response.refreshToken,
      response.accessToken,
    );

    return response;
  } catch (error) {
    console.error('Error during rePost refreshToken:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
