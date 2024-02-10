import { cookies } from 'next/headers';

export const getPortfolioDetail = async (articleId: number) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/portfolio/${articleId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token?.value,
        },
      },
    ).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('detail error', error);
  }
};

export const getRecruitDetail = async (articleId: number) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/recruit/${articleId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token?.value,
        },
      },
    ).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('detail error', error);
  }
};
