import { cookies } from 'next/headers';

export const getPortfolioMain = async (
  size: string,
  page: string,
  sort: string,
  detailTags: string | string[],
) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/portfolio`,
      {
        headers: {
          'Content-Type': 'application/json',
          // authorization: 'Bearer ' + token?.value,
          authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZW5lZWQyMDI0QGdtYWlsLmNvbSIsImlhdCI6MTcwNzU2ODkwOCwiZXhwIjoxNzA3NjU1MzA4LCJzdWIiOiJza2R1ZDM2NjlAZ21haWwuY29tIiwiaWQiOjR9.lswGkAgOb68SKR3AWNAMY9Fvmvdph9jxe8xjYD_HA0w',
        },
      },
    ).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('portfolio error', error);
  }
};

export const getRecruitMain = async (
  size: string,
  page: string,
  sort: string | string[],
) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/recruit`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + token?.value,
      },
    }).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('recruit error', error);
  }
};

export const getSearch = async (
  size: string,
  page: string,
  keyword: string,
) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/search`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + token?.value,
      },
    }).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('search error', error);
  }
};

export const postLikes = async (articleId: string) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/likes/${articleId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token?.value,
        },
      },
    ).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('recruit error', error);
  }
};

export const postBookmarks = async (articleId: string) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/postBookmarks/${articleId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token?.value,
        },
      },
    ).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('recruit error', error);
  }
};
