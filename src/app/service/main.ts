import { cookies } from 'next/headers';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

const commonHeaders = {
  'Content-Type': 'application/json',
  authorization: 'Bearer ' + cookies().get('accessToken'),
};

const getRequest = async (url: string) => {
  try {
    const response = await fetch(url, { headers: commonHeaders }).then((res) =>
      res.json(),
    );
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

export const getPortfolioMain = async (
  size: string,
  page: string,
  sort: string,
  detailTags: string | string[],
) => {
  const params = new URLSearchParams({
    size,
    page,
    sort,
    detailTags: Array.isArray(detailTags) ? detailTags.join(',') : detailTags,
  });
  const url = `${SERVER_URL}/portfolio?${params.toString()}`;
  return await getRequest(url);
};

export const getRecruitMain = async (
  size: string,
  page: string,
  detailTags: string | string[],
) => {
  const params = new URLSearchParams({
    size,
    page,
    detailTags: Array.isArray(detailTags) ? detailTags.join(',') : detailTags,
  });
  const url = `${SERVER_URL}/recruit?${params.toString()}`;
  return await getRequest(url);
};

export const getSearch = async (
  size: string,
  page: string,
  keyword: string,
) => {
  const params = new URLSearchParams({
    size,
    page,
    keyword,
  });
  const url = `${SERVER_URL}/search?${params.toString()}`;
  return await getRequest(url);
};

export const getPortfolioDetail = async (articleId: string) => {
  const url = `${SERVER_URL}/portfolio/${articleId}`;
  return await getRequest(url);
};

export const getRecruitDetail = async (articleId: string) => {
  const url = `${SERVER_URL}/recruit/${articleId}`;
  return await getRequest(url);
};

export const postLikes = async (articleId: string) => {
  const url = `${SERVER_URL}/likes/${articleId}`;
  return await fetch(url, { method: 'POST', headers: commonHeaders });
};

export const postBookmarks = async (articleId: string) => {
  const url = `${SERVER_URL}/postBookmarks/${articleId}`;
  return await fetch(url, { method: 'POST', headers: commonHeaders });
};
