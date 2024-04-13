const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;
const commonHeaders = {
  'Content-Type': 'application/json',
};

const postRequest = async (
  url: string,
  accessToken: string,
  body: any = null,
  isFormData: boolean = false,
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: isFormData
        ? { Authorization: 'Bearer ' + accessToken }
        : { ...commonHeaders, Authorization: 'Bearer ' + accessToken },
      body: isFormData ? body : JSON.stringify(body),
    });
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const postLikes = async (articleId: string, accessToken: string) => {
  const url = `${SERVER_URL}/likes/${articleId}`;
  return await postRequest(url, accessToken);
};

export const postBookmarks = async (articleId: string, accessToken: string) => {
  const url = `${SERVER_URL}/bookmarks/${articleId}`;
  return await postRequest(url, accessToken);
};

export const postComment = async (
  articleId: string,
  comment: { content: string },
  parentId: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/comments/${articleId}`;
  return await postRequest(url, accessToken, {
    ...comment,
    parentId: parentId,
  });
};

export const postRecruiter = async (
  articleId: string,
  bodyData: RecruitForm,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/recruitForms/${articleId}`;
  return await postRequest(url, accessToken, bodyData);
};

export const postApplicant = async (
  articleId: string,
  bodyData: ApplicationFormRequest,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/application-forms/${articleId}`;
  return await postRequest(url, accessToken, bodyData);
};
