import { cookies } from 'next/headers';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
  //   authorization: 'Bearer ' + cookies().get('accessToken'),
  Authorization:
    'Bearer' +
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZW5lZWQyMDI0QGdtYWlsLmNvbSIsImlhdCI6MTcwNzYyNjA3MSwiZXhwIjoxNzA3NzEyNDcxLCJzdWIiOiJza2R1ZDM2NjlAZ21haWwuY29tIiwiaWQiOjR9.Q3KJndoV0Pw0kUVYEDV69PkdE67PqCTu9iQqOevzxq8',
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
  comment: { content: string },
  parentId: string,
) => {
  console.log(comment);
  const url = `${SERVER_URL}/comments/${articleId}`;
  return await postRequest(url, { ...comment, parentId: parentId });
};
