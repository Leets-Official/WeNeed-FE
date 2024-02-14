import { parse } from 'cookie';

export const setTokens = (accessToken: string, refreshToken: string) => {
  try {
    document.cookie = `accessToken=${accessToken}; path=/;`;
    document.cookie = `refreshToken=${refreshToken}; path=/;`;
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
