import { NextResponse } from 'next/server';
import { getPortfolioMain } from 'service/getRequests';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '16';
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || 'DESC';
  const detailTags = searchParams.get('detailTags') || ['전체'];
  const data = await getPortfolioMain(size, page, sort, detailTags).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
