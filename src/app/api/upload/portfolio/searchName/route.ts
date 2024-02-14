import { NextResponse } from 'next/server';
import { searchTeamMate } from 'service/searchTeamMate';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('searchText') || '';

  const userInfo = await searchTeamMate(name);
  return NextResponse.json(userInfo);
}
