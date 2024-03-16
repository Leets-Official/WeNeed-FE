const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

interface UpdateApplicantRequestBody {
  result: string;
}

const postRequest = async (url: string, body: any, accessToken: string) => {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Failed to patch data');
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const updateApplicantResult = async (
  applicationId: string,
  result: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/application-forms/${applicationId}`;
  const requestBody: UpdateApplicantRequestBody = { result };

  try {
    const response = await postRequest(url, requestBody, accessToken);
    return response; // 요청이 성공하면 응답을 반환합니다.
  } catch (error) {
    throw error; // postRequest 함수에서 발생한 오류를 다시 throw하여 호출한 곳에서 처리할 수 있도록 합니다.
  }
};
