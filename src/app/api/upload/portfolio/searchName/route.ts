import { NextResponse } from 'next/server';
import { getTeamMate } from 'service/getRequests';
import { searchTeamMate } from 'service/searchTeamMate';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('searchText') || '';

  const userInfo = await getTeamMate(name, accessToken);
  return NextResponse.json(userInfo);
}
