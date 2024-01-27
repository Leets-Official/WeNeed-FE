import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  /* production env */
  // const data = await getPortfolioDetails(size, page, sort).then((data) => data);

  /* development env */
  return NextResponse.json(mockRecruitingDetails);
}

const mockRecruitingDetails = {
  user: {
    nickname: 'string',
    sameUser: true,
    hearted: true,
    bookmarked: true,
  },
  recruit: {
    thumbnail: 'string',
    title: 'string',
    createdAt: '2024-01-25T08:46:29.717Z',
    heatCount: 0,
    viewCount: 0,
    bookmarkCount: 0,
    commentCount: 0,
    skills: ['string'],
    links: ['string'],
    tags: ['string'],
    files: ['string'],
    writer: {
      userId: 0,
      writerNickname: 'string',
      major: '경영학전공',
      profile: 'string',
      grade: 0,
    },
    contents: [
      {
        id: 0,
        type: 'string',
        textData: 'string',
        imageData: 'string',
      },
    ],
    teamMembers: [
      {
        userId: 0,
        nickname: 'string',
        profile: 'string',
      },
    ],
  },
  comments: [
    {
      commentId: 0,
      content: 'string',
      userId: 0,
      nickname: 'string',
      major: '경영학전공',
      grade: 0,
      createdAt: '2024-01-25T08:46:29.717Z',
      profile: 'string',
    },
  ],
};
