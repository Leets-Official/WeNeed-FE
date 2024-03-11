import { NextResponse } from 'next/server';
import { getApplicantForm } from 'service/getRequests';
import { getCookie } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken');
  const { searchParams } = new URL(request.url);
  const applicationId = searchParams.get('applicationId') || '';
  const data = await getApplicantForm(applicationId, accessToken).then(
    (data) => data,
  );
  return NextResponse.json(data);
}
