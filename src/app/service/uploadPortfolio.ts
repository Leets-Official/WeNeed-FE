const commonHeaders = {
  Authorization:
    'Bearer ' +
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZW5lZWQyMDI0QGdtYWlsLmNvbSIsImlhdCI6MTcwNzgwMjE3MCwiZXhwIjoxNzA3ODg4NTcwLCJzdWIiOiJza2R1ZDM2NjlAZ21haWwuY29tIiwiaWQiOjR9.FL5GCdjrjDAKEnILaqMwAskwYpN2Nma_9_nEdp2kpeQ',
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
  const url = `${process.env.NEXT_PUBLIC_SERVER}portfolio`;
  return await postRequest(url, portfolio);
};
