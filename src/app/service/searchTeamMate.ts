const SERVER_URL = process.env.NEXT_PUBLIC_SERVER;

export const searchTeamMate = async (searchText: string) => {
  try {
    const users: ResponseUploadSearch = await fetch(
      `${SERVER_URL}/portfolio/team-member?nickname=${searchText}`,
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
    console.error('팀검색 오류 발생 error', error);
  }
};
