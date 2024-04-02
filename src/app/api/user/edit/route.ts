import { NextResponse } from 'next/server';
import { patchUserInfoEdit } from 'service/userinfo';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(req: Request) {
  const accessToken = getCookie(req, 'accessToken');
  try {
    const requestBody = await req.formData();
    const response = await patchUserInfoEdit(requestBody, accessToken);
    return NextResponse.json(JSON.stringify(response), {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error(
      '넥스트 서버에서 사용자 정보 PATCH 요청 처리 중 오류 발생 in user edit routes :',
      error,
    );
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
