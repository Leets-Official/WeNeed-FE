const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const postRequest = async (
  url: string,
  body: FormData,
  accessToken: string,
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      body: body,
    });
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const uploadPortfolio = async (
  portfolio: FormData,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/portfolio`;
  return await postRequest(url, portfolio, accessToken);
};

export const uploadRecruit = async (
  portfolio: FormData,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/recruit`;
  return await postRequest(url, portfolio, accessToken);
};
