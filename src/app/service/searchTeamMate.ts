import { cookies } from 'next/headers';

export const searchTeamMate = async (searchText: string) => {
  const token = cookies().get('accessToken');
  try {
    const users: ResponseUploadSearch = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}portfolio/team-member?nickname=${searchText}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZW5lZWQyMDI0QGdtYWlsLmNvbSIsImlhdCI6MTcwNzU2ODkwOCwiZXhwIjoxNzA3NjU1MzA4LCJzdWIiOiJza2R1ZDM2NjlAZ21haWwuY29tIiwiaWQiOjR9.lswGkAgOb68SKR3AWNAMY9Fvmvdph9jxe8xjYD_HA0w',
        },
        cache: 'no-store',
      },
    ).then((res) => res.json());
    return users;
  } catch (error) {
    console.log('팀검색 오류 발생 error', error);
  }
};
