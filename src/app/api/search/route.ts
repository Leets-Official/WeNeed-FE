import { NextResponse } from 'next/server';
import { getSearch } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '16';
  const page = searchParams.get('page') || '1';
  const keyword = searchParams.get('keyword') || '';
  const data = await getSearch(size, page, keyword, accessToken).then(
    (data) => data,
  );

  return NextResponse.json(data);
}
