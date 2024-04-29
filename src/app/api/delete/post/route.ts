import { NextResponse } from 'next/server';
import { deletePost } from 'service/deleteRequests';
import { getCookie } from 'utils/cookieUtils';

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';

  const data = await deletePost(articleId, accessToken);

  return NextResponse.json(data);
}
