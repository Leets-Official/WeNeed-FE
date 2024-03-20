import { parse } from 'cookie';

export const setTokens = (accessToken: string, refreshToken: string) => {
  try {
    const accessTokenExpires = new Date(Date.now() + 22 * 3600000); // 22시간 후
    const refreshTokenExpires = new Date(Date.now() + 8980 * 60000); // 6일 6시간 후
    const accessTokenExpiresUTC = accessTokenExpires.toUTCString();
    const refreshTokenExpiresUTC = refreshTokenExpires.toUTCString();

    document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpiresUTC}; path=/;`;
    document.cookie = `refreshToken=${refreshToken}; expires=${refreshTokenExpiresUTC}; path=/;`;
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
