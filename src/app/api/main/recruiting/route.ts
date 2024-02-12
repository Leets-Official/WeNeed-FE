import { NextResponse } from 'next/server';
import { getRecruitMain } from 'service/getRequests';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '5';
  const page = searchParams.get('page') || '1';
  const detailTags = searchParams.get('detailTags') || ['전체'];
  const data = await getRecruitMain(size, page, detailTags).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
