import { NextResponse } from 'next/server';
import { getMyInstCrews } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');

  const { searchParams } = new URL(request.url);
  const size = parseInt(searchParams.get('size') || '3');
  const page = parseInt(searchParams.get('page') || '1');
  const data = await getMyInstCrews(accessToken, size, page).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
