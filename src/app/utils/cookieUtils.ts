import { serialize, parse } from 'cookie';
import { NextResponse } from 'next/server';

interface FirsetCookieProps {
  res: NextResponse<unknown>;
  name: string;
  value: string;
}

const generateCookie = ({ accessToken, refreshToken }: ResponseGoogleLogin) => {
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
  response: NextResponse<unknown>,
  accessToken: string,
  refreshToken: string,
): NextResponse<unknown> => {
  try {
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

export const setFirstCookies = ({
  res,
  name,
  value,
}: FirsetCookieProps): NextResponse<unknown> => {
  try {
    const firstLoginMaxAge = 365 * 24 * 60 * 60; // 1 year

    const firstLoginCookies = serialize(name, value, {
      expires: new Date(Date.now() + firstLoginMaxAge * 1000),
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    res.cookies.set(name, firstLoginCookies);
    console.log('setCookies res.cookies : ', res.cookies);
    return res;
  } catch (error) {
    console.error('Error during setting cookies:', error);
    throw error;
  }
};

export const getCookie = (req: Request, name: string) => {
  try {
    const cookieHeader = req.headers.get('cookie');
    const cookies = parse(cookieHeader || '');
    console.log('getCookies cookies : ', cookies);
    console.log('getCookies cookies[name] : ', cookies[name]);
    return cookies[name];
  } catch (error) {
    console.error('Error during getting cookies:', error);
    throw error;
  }
};
