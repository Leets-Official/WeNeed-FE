import { cookies } from 'next/headers';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + cookies().get('accessToken'),
};

const postRequest = async (url: string, body?: unknown) => {
  try {
    const response = await await fetch(url, {
      method: 'POST',
      headers: commonHeaders,
      body: JSON.stringify(body),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const postLikes = async (articleId: string) => {
  const url = `${SERVER_URL}/likes/${articleId}`;
  return await postRequest(url);
};

export const postBookmarks = async (articleId: string) => {
  const url = `${SERVER_URL}/postBookmarks/${articleId}`;
  return await postRequest(url);
};

export const postComment = async (
  articleId: string,
  comment: string,
  parentId: string,
) => {
  const url = `${SERVER_URL}/comments/${articleId}`;
  return await postRequest(url, { comment, parentId });
};
