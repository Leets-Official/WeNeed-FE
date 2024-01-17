import { cookies } from 'next/headers';

/** main portfolio posts 가져오기 */
export const getPortfolioMain = async (
  size: string,
  page: string,
  sort: string | string[],
) => {
  const token = cookies().get('accessToken');
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/portfolio`, // backend endpoint
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token?.value,
        },
        cache: 'no-store',
      },
    ).then<unknown>((res) => res.json());
    return response;
  } catch (error) {
    console.log('get portfolio error', error);
  }
};
