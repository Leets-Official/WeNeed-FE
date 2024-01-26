import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

const generateCookie = ({ accessToken, refreshToken }: GoogleLoginResponse) => {
  const accessTokenMaxAge = 1 * 24 * 60 * 60; // 1 day
  const refreshTokenMaxAge = 14 * 24 * 60 * 60; // 2 weeks

  const accessTokenCookie = serialize('accessToken', accessToken, {
    maxAge: accessTokenMaxAge,
    expires: new Date(Date.now() + accessTokenMaxAge * 1000),
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  const refreshTokenCookie = serialize('refreshToken', refreshToken, {
    maxAge: refreshTokenMaxAge,
    expires: new Date(Date.now() + refreshTokenMaxAge * 1000),
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return { accessTokenCookie, refreshTokenCookie };
};

export const setTokens = (
  response: NextResponse,
  accessToken: string,
  refreshToken: string,
): NextResponse => {
  try {
    console.log(' This is Tokens in server : ', accessToken, refreshToken);

    console.log(
      'This is Response on server response before set cookie: ',
      response,
    );

    const { accessTokenCookie, refreshTokenCookie } = generateCookie({
      accessToken,
      refreshToken,
    });

    response.cookies.set('accessToken', accessTokenCookie);
    response.cookies.set('refreshToken', refreshTokenCookie);

    console.log('cookies set on server response', response);
    return response;
  } catch (error) {
    console.error('Error during setting cookies:', error);
    throw error;
  }
};
