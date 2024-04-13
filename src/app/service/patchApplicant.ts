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
    return response;
  } catch (error) {
    throw error;
  }
};
