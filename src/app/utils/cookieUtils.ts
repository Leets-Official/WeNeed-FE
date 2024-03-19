import { parse } from 'cookie';

export const setTokens = (accessToken: string, refreshToken: string) => {
  try {
    const accessTokenExpires = new Date(Date.now() + 1320 * 60000);
    const refreshTokenExpires = new Date(Date.now() + 8980 * 60000);

    document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpires.toUTCString()}; path=/;`;
    document.cookie = `refreshToken=${refreshToken}; expires=${refreshTokenExpires.toUTCString()}; path=/;`;
  } catch (error) {
    console.error('쿠키 세팅 에러:', error);
    throw error;
  }
};

export const getCookie = (req: Request, name: string) => {
  try {
    const cookieHeader = req.headers.get('cookie');
    const cookies = parse(cookieHeader || '');
    return cookies[name];
  } catch (error) {
    console.error('쿠키 가져오기 에러:', error);
    throw error;
  }
};
