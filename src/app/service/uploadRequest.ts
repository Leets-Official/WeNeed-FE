const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const postRequest = async (
  url: string,
  body: any = null,
  accessToken: string,
) => {
  try {
    console.log('실제서버', body);
    const response = await fetch(url, {
      method: 'POST',
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

export const uploadPortfolio = async (
  portfolio: UploadRequestBody,
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
