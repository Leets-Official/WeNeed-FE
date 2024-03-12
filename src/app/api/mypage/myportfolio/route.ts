import { NextResponse } from 'next/server';
import { getMyPortfolio } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');

  const { searchParams } = new URL(request.url);
  const size = parseInt(searchParams.get('size') || '3');
  const page = parseInt(searchParams.get('page') || '1');
  const userId = parseInt(searchParams.get('userId') || '');
  // const data = await getMyPortfolio(accessToken, size, page, userId).then(
  //   (data) => data,
  // );
  return NextResponse.json(Mockdata);
}

const Mockdata = {
  userNickname: 'string',
  sameUser: false,
  userInfo: {
    profile: null,
    nickname: 'string',
    major: '경영학전공',
    userGrade: 0,
    doubleMajor: '경영학전공',
    interestField: '미디어',
    email: 'string',
    links: ['string'],
    selfIntro: 'string',
  },
};
