const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const patchRequest = async (
  url: string,
  body: any = null,
  accessToken: string,
) => {
  try {
    console.log('실제서버', body);
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify(body),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

export const updatePortfolio = async (
  portfolio: UploadRequestBody,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/portfolio/${id}`;
  return await patchRequest(url, portfolio, accessToken);
};

export const updateRecruit = async (
  recruit: UploadRequestBody,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/recruit/${id}`;
  return await patchRequest(url, recruit, accessToken);
};
