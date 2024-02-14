const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
};

const postRequest = async (
  url: string,
  accessToken: string,
  body?: unknown,
) => {
  try {
    const response = await await fetch(url, {
      method: 'POST',
      headers: { ...commonHeaders, Authorization: 'Bearer ' + accessToken },
      body: JSON.stringify(body),
    }).then((res) => res.json());
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
