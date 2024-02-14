import { NextResponse } from 'next/server';
import { getRecruitMain } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '5';
  const page = searchParams.get('page') || '1';
  const detailTags = searchParams.get('detailTags') || ['전체'];
  const data = await getRecruitMain(size, page, detailTags, accessToken).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
