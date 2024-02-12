import { NextResponse } from 'next/server';
import { getRecruitDetail } from 'service/getRequests';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const data = await getRecruitDetail(articleId).then((data) => data);
  return NextResponse.json(data);
}
