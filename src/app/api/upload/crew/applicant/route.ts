import { NextResponse } from 'next/server';
import { postApplicant } from 'service/postRequests';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const res = await request.json();
  console.log('res::', res);
  const data = await postApplicant(articleId, res, accessToken).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
