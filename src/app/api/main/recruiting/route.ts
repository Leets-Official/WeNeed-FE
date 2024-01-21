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
        '현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요!',
      thumbnail: '~.jpg',
      content: '~~~', //게시물에 content 모두 합쳐서 String 하나로 줄게~
      commentCount: 12,
      viewCount: 22,
      heartCount: 52,
      bookmarkCount: 21,
    },
    {
      articleId: 3,
      nickname: '본인이름',
      major: '시각디자인과',
      grade: 3,
      createdAt: '2023-01-01T00:00:00Z',
      title:
        '현재 웹 사이트를 개발 중인데 저희 무드와 비슷한 UI 디자이너를 구하고 있어요!',
      thumbnail: '~.jpg',
      content: '',
      commentCount: 12,
      viewCount: 22,
      heartCount: 52,
      bookmarkCount: 21,
    },
  ],
};
