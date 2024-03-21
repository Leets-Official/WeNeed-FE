import { get } from 'http';
import { NextResponse } from 'next/server';
import { getNewToken } from 'service/getNewToken';
import { getPortfolioMain } from 'service/getRequests';
import { getCookie, setTokens } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken');
  let refreshToken = getCookie(request, 'refreshToken');
  let getNewTokenFlag = false;

  if (accessToken === undefined && refreshToken) {
    await getNewToken(refreshToken).then((data) => {
      accessToken = data.accessToken;
      refreshToken = data.refreshToken;
      getNewTokenFlag = true;
    });
  }

  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '16';
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'DESC';
  const detailTags = searchParams.get('detailTags') || [];
  const data = await getPortfolioMain(
    size,
    page,
    sort,
    detailTags,
    accessToken,
  ).then((data) => data);

  if (getNewTokenFlag) {
    return NextResponse.json({
      ...data,
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  }
  return NextResponse.json(data);
}
