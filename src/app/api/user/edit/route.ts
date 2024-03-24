import { NextResponse } from 'next/server';
import { patchUserInfoEdit } from 'service/userinfo';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(req: Request) {
  const accessToken = getCookie(req, 'accessToken');
  const userInfo = await req.json();
  console.log('userInfo', userInfo);

  const { profileImage, request, selfIntro } = userInfo;
  const {
    nickname,
    major,
    userGrade,
    doubleMajor,
    interestField,
    email,
    links,
  } = request;
  const requestBody = {
    profileImage,
    request: {
      nickname,
      major,
      userGrade,
      doubleMajor,
      interestField,
      links,
    },
    selfIntro,
  };
  try {
    const response = await patchUserInfoEdit(requestBody, accessToken);
    return NextResponse.json({ result: 'success' });
  } catch (error) {
    console.error(
      '넥스트 서버에서 사용자 정보 PATCH 요청 처리 중 오류 발생:',
      error,
    );
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
