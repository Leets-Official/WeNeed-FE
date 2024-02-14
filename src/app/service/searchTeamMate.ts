import { cookies } from 'next/headers';

export const searchTeamMate = async (searchText: string) => {
  const token = cookies().get('accessToken');
  try {
    const users: ResponseUploadSearch = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/portfolio/team-member?nickname=${searchText}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    ).then((res) => res.json());
    return users;
  } catch (error) {
    console.log('팀검색 오류 발생 error', error);
  }
};
