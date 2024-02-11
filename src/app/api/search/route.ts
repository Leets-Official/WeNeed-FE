import { NextResponse } from 'next/server';
import { getSearch } from 'service/getRequests';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const size = searchParams.get('size') || '16';
  const page = searchParams.get('page') || '1';
  const keyword = searchParams.get('keyword') || '';
  const data = await getSearch(size, page, keyword).then((data) => data);

  return NextResponse.json(data);
}
