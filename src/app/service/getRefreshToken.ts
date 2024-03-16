const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

export const getRefreshToken = async (refreshToken: string) => {
  const url = `${SERVER_URL}/refresh`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ refreshToken }),
  });
  return response.json();
};
