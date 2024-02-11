import { NextResponse } from 'next/server';
import { getPortfolioMain } from 'service/main';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '16';
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'DESC';
  const detailTags = searchParams.get('detailTags') || ['전체'];
  const data = await getPortfolioMain(size, page, sort, detailTags).then(
    (data) => data,
  );
  /* development env */
  return NextResponse.json(data);
}

const mockPortfolioMain = {
  user: {
    nickname: '위니드',
  },
  pagable: {
    size: 20,
    page: 1,
    totalPages: 3,
    totalElements: 45,
  },
  hotArticleList: [
    {
      articleId: 1,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 2,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 5,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 6,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
    {
      articleId: 7,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
    },
  ],
  articleList: [
    {
      articleId: 10,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      writerNickname: '유저3',
      createdAt: '2023-01-01T00:00:00Z',
      viewCount: 122,
      heartCount: 12,
      bookmarked: false,
    },
    {
      articleId: 11,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      writerNickname: '유저3',
      createdAt: '2023-01-01T00:00:00Z',
      viewCount: 122,
      heartCount: 12,
      bookmarked: true,
    },
  ],
  recommendArticleList: [
    {
      articleId: 3,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',

      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
      subTitle: '~~~',
      bookmarked: true,
    },
    {
      articleId: 4,
      thumbnail:
        'https://www.billboard.com/wp-content/uploads/2023/04/aespa-press-credit-SM-Entertainment-2023-billboard-exclusive-1548.jpg',
      createdAt: '2023-01-01T00:00:00Z',
      title: '~~~',
      subTitle: '~~~',
      bookmarked: true,
    },
  ],
};
