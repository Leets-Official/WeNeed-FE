import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await getRecruitingMain(size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockPortfolioMain);
}

const mockPortfolioMain = {
  user: {
    nickname: '위니드', //비로그인 : "guest"
  },
  pagable: {
    size: 3,
    page: 1,
    totalPages: 3,
    totalElements: 8,
  },
  recrutingList: [
    {
      articleId: 3,
      nickname: '본인이름',
      major: '시각디자인과',
      grade: 3,
      createdAt: '2023-01-01T00:00:00Z',
      title:
        '현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요! 현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요!현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요!현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요!',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/28ce/52f0/dc426ce4c88eb876d640ed1adc5bfa66?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDHTfktMIEqSPQflScgsspXVUBonBBev8P43ODwYUE6x3m1r80GktuWeACgco06zTqtBNAWqhJkgI~5~yK7xTNKMmk4KFrqJNAulssGBohsZft9y-6gAvVOyw5E4AaTibC~JA-iyv1oUiEq3lXjZjW0yOuHM3BWPn~oDFop7BXe8CPAJdlOZlZVPQyaXWEC5D0BfvVix8a0SZBxPKZ~O~f8US4unn0xUC~uoa5mQONMEekeMF28Z0UORz3MXJUs6xzf0Rz4U62cntCLcPONLlFAhbGllTYhFdweW8ht1A-9Uxnj7hFb2Prwu8HoAQdgG~eXSOvt9ZZ8~M9B4PgvppA__',
      content:
        '<p>저희는 21학번으로 총 4명끼리 개발을 하고 있는 소프트웨어학과 학생들 입니다.</p> <br /> <p>저희와 즐거운 마음으로 함께하실 분을 찾아요 :)  저희도 초보자고 마음 편하게 크루지원 해주시면 좋을 것 같아요.</p>',
      commentCount: 12,
      viewCount: 22,
      heartCount: 52,
      bookmarkCount: 21,
    },
    {
      articleId: 4,
      nickname: '본인이름',
      major: '시각디자인과',
      grade: 3,
      createdAt: '2023-01-01T00:00:00Z',
      title:
        '현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요!',
      thumbnail:
        'https://s3-alpha-sig.figma.com/img/28ce/52f0/dc426ce4c88eb876d640ed1adc5bfa66?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDHTfktMIEqSPQflScgsspXVUBonBBev8P43ODwYUE6x3m1r80GktuWeACgco06zTqtBNAWqhJkgI~5~yK7xTNKMmk4KFrqJNAulssGBohsZft9y-6gAvVOyw5E4AaTibC~JA-iyv1oUiEq3lXjZjW0yOuHM3BWPn~oDFop7BXe8CPAJdlOZlZVPQyaXWEC5D0BfvVix8a0SZBxPKZ~O~f8US4unn0xUC~uoa5mQONMEekeMF28Z0UORz3MXJUs6xzf0Rz4U62cntCLcPONLlFAhbGllTYhFdweW8ht1A-9Uxnj7hFb2Prwu8HoAQdgG~eXSOvt9ZZ8~M9B4PgvppA__',
      content:
        '<p>저희는 21학번으로 총 4명끼리 개발을 하고 있는 소프트웨어학과 학생들 입니다.</p><p>저희와 즐거운 마음으로 함께하실 분을 찾아요 :)  저희도 초보자고 마음 편하게 크루지원 해주시면 좋을 것 같아요.</p>',
      commentCount: 12,
      viewCount: 22,
      heartCount: 52,
      bookmarkCount: 21,
    },
  ],
};
