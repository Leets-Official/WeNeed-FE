import { cookies } from 'next/headers';

export const searchTeamMate = async (searchText: string) => {
  const token = cookies().get('accessToken');
  try {
    const { users }: ResponseUploadSearch = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/upload/portfolio/search?name=${searchText}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token?.value,
        },
        cache: 'no-store',
      },
    ).then((res) => res.json());
    return users;
  } catch (error) {
    console.log('팀검색 오류 발생 error', error);
  }
};
