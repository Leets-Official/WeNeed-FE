const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const postRequest = async (
  url: string,
  body: FormData,
  accessToken: string,
) => {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + { accessToken },
      },
      body: body,
    });
    console.log('서버로 patch요청 body', body);
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const updatePortfolio = async (
  portfolio: FormData,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/portfolio/${id}`;
  return await postRequest(url, portfolio, accessToken);
};

export const updateRecruit = async (
  recruit: FormData,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/portfolio/${id}`;
  return await postRequest(url, recruit, accessToken);
};
