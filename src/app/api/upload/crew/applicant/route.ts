import { NextResponse } from 'next/server';
import { postApplicant } from 'service/postRequests';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const articleId = searchParams.get('articleId') || '';
  const res = await request.formData();
  const data = await postApplicant(articleId, res, accessToken);
  return NextResponse.json(JSON.stringify(data), {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
