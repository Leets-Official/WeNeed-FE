import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await (size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockSearch);
}

const mockSearch = {
  user: {
    nickname: 'string',
  },
  pageable: {
    size: 3,
    page: 0,
    totalPages: 0,
    totalElements: 0,
  },
  articleList: [
    {
      articleId: 0,
      thumbnail: 'string',
      title: 'string',
      detailTags: ['string'],
      writerNickname: 'string',
      major: '경영학전공',
      grade: 0,
      viewCount: 0,
      heartCount: 0,
      bookmarkCount: 0,
    },
  ],
};
