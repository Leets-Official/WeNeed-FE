import { parse } from 'cookie';

export const setTokens = (accessToken: string, refreshToken: string) => {
  try {
    document.cookie = `accessToken=${accessToken}; path=/;`;
    document.cookie = `refreshToken=${refreshToken}; path=/;`;

    console.log('cookies set on server response');
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
