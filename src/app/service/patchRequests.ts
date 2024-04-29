const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const patchRequest = async (
  url: string,
  body: any = null,
  accessToken: string,
) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
    body: JSON.stringify(body),
  });
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
