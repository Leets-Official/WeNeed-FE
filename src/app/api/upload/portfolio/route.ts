import { NextResponse } from 'next/server';
import { uploadPortfolio } from 'service/uploadRequest';
import { getCookie } from 'utils/cookieUtils';

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken');
  const content = await request.json();
  try {
    const data = await uploadPortfolio(content, accessToken);
    return NextResponse.json(data);
  } catch (error) {
    throw new Error('Error submitting recruiter data');
  }
}
