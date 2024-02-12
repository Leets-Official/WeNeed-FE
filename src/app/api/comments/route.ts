import { NextResponse } from 'next/server';
import { postComment } from 'service/postRequests';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const parentId = searchParams.get('parentId') || '0';
  const content = await request.json();
  const data = await postComment(articleId, content, parentId).then(
    (data) => data,
  );

  return NextResponse.json(data);
}
