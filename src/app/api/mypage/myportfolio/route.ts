import { NextResponse } from 'next/server';
import { getMyPortfolio } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');

  const { searchParams } = new URL(request.url);
  const size = parseInt(searchParams.get('size') || '3');
  const page = parseInt(searchParams.get('page') || '1');
  const userId = parseInt(searchParams.get('userId') || '');
  const data = await getMyPortfolio(accessToken, size, page, userId).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
