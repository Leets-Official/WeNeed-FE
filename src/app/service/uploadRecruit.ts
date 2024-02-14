const commonHeaders = {
  Authorization:
    'Bearer ' +
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZW5lZWQyMDI0QGdtYWlsLmNvbSIsImlhdCI6MTcwNzg5MzUzNCwiZXhwIjoxNzA3OTc5OTM0LCJzdWIiOiJza2R1ZDM2NjlAZ21haWwuY29tIiwiaWQiOjR9.Jat_v3VPcNH2M7yC3_PsvYFqH5jN6fCbM_l28zIQIqE',
};

const postRequest = async (url: string, body: FormData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: commonHeaders,
      body: body,
    });
    console.log('recruit 작성 실제 서버에 넣어 보내기', body);
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const uploadRecruit = async (recruit: FormData) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER}/recruit`;
  return await postRequest(url, recruit);
};
