import { NextResponse } from 'next/server';
import { getPortfolioMain } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
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
  return NextResponse.json(data);
}
