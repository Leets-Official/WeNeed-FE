const commonHeaders = {
  Authorization:
    'Bearer ' +
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZW5lZWQyMDI0QGdtYWlsLmNvbSIsImlhdCI6MTcwNzg4MzIyNywiZXhwIjoxNzA5MDkyODI3LCJzdWIiOiJ5bmcxNDA0QGdtYWlsLmNvbSIsImlkIjo1fQ.w9vScTz4yWaoPz6BgzE0-ywF2oezjcYPwSh5Iaw-rW0',
};

const postRequest = async (url: string, body: FormData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: commonHeaders,
      body: body,
    });
    console.log('실제 서버에 넣어 보내기', body);
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const uploadPortfolio = async (portfolio: FormData) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER}/portfolio`;
  return await postRequest(url, portfolio);
};
