const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

export const getNewToken = async (refreshToken: string) => {
  try {
    const url = `${SERVER_URL}/refresh`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('토큰 갱신 성공 ');
    console.log('response in getNewToken : ', data);
    return data;
  } catch (error) {
    console.error('토큰 갱신 에러:', error);
    throw error;
  }
};
