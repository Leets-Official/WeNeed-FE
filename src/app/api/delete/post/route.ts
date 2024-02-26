import { NextResponse } from 'next/server';
import { deletePost } from 'service/deletePost';
import { getCookie } from 'utils/cookieUtils';

export async function DELETE(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const accessToken = getCookie(request, 'accessToken');

  const data = await deletePost(articleId, accessToken);

  return NextResponse.json(data);
}
