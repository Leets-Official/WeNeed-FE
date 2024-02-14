import { NextResponse } from 'next/server';
import { getPortfolioDetail } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const data = await getPortfolioDetail(articleId, accessToken).then(
    (data) => data,
  );

  return NextResponse.json(data);
}
