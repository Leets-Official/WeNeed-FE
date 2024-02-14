import { NextResponse } from 'next/server';
import { getPortfolioDetail } from 'service/getRequests';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const data = await getPortfolioDetail(articleId).then((data) => data);

  return NextResponse.json(data);
}
