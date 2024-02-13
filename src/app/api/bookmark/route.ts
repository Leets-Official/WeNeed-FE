import { NextResponse } from 'next/server';
import { postBookmarks } from 'service/postRequests';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const data = await postBookmarks(articleId).then((data) => data);

  return NextResponse.json(data);
}
