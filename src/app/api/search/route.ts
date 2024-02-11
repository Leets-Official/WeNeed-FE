import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await (size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockSearch);
}

const mockSearch = {
  user: {
    nickname: '위니드',
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
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      title: '사진 기법 ',
      detailTags: ['string'],
      writerNickname: '위니드',
      major: '경영학전공',
      grade: 4,
      viewCount: 80,
      heartCount: 30,
      bookmarkCount: 50,
    },
    {
      articleId: 1,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      title: '사진 기법 ',
      detailTags: ['string'],
      writerNickname: 'string',
      major: '경영학전공',
      grade: 0,
      viewCount: 0,
      heartCount: 0,
      bookmarkCount: 0,
    },
    {
      articleId: 1,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      title: '사진 기법 ',
      detailTags: ['string'],
      writerNickname: 'string',
      major: '경영학전공',
      grade: 0,
      viewCount: 0,
      heartCount: 0,
      bookmarkCount: 0,
    },
    {
      articleId: 1,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      title: '사진 기법 ',
      detailTags: ['string'],
      writerNickname: 'string',
      major: '경영학전공',
      grade: 0,
      viewCount: 0,
      heartCount: 0,
      bookmarkCount: 0,
    },
    {
      articleId: 1,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      title: '사진 기법 ',
      detailTags: ['string'],
      writerNickname: 'string',
      major: '경영학전공',
      grade: 0,
      viewCount: 0,
      heartCount: 0,
      bookmarkCount: 0,
    },
    {
      articleId: 1,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      title: '사진 기법 ',
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
