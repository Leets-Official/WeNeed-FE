import { NextResponse } from 'next/server';
import { postComment } from 'service/postRequests';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const parentId = searchParams.get('parentId') || '0';
  const content = await request.json();
  const data = await postComment(
    articleId,
    content,
    parentId,
    accessToken,
  ).then((data) => data);

  return NextResponse.json(data);
}
