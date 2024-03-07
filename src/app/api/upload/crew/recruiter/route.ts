import { NextResponse } from 'next/server';
import { postRecruiter } from 'service/postRequests';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const requestBody = await request.json();
  const data = await postRecruiter(articleId, requestBody, accessToken).then(
    (data) => data,
  );

  return NextResponse.json(data);
}
