import { NextResponse } from 'next/server';
import { updateApplicantResult } from 'service/patchApplicant';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('applicationId') || '';
  const result = searchParams.get('result') || '';
  const accessToken = getCookie(request, 'accessToken');
  console.log('포폴수정 요청 데이터', request);
  console.log('포폴수정 요청 데이터', id, result, accessToken);
  try {
    const response = await updateApplicantResult(id, result, accessToken);
    console.log('포폴수정 요청 응답', response);
    return NextResponse.json({ result: 'success' });
  } catch (error) {
    console.error('넥스트 서버에서 PATCH 요청 처리 중 오류 발생:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
