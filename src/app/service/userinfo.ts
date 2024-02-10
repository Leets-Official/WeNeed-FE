export const setEmail = async (email: string) => {
  try {
    console.log('set Email : ', email);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/certify?email=${email}`, // 백엔드 엔드포인트
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    );
    console.log('Set Email Response : ', response);

    if (!response.ok) {
      throw new Error(
        `이메일을 가져오는 데 실패했습니다: ${response.status} ${response.statusText}`,
      );
    }

    return response;
  } catch (error) {
    console.log('이메일 설정 오류', error);
  }
};

export const postCode = async (code: string, email: string) => {
  try {
    console.log('post Code and Email', JSON.stringify({ code, email }));
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/certifycode`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, email }),
        cache: 'no-store',
      },
    );
    console.log('set code response : ', response);

    if (!response.ok) {
      throw new Error(
        `코드를 보내는 데 실패했습니다: ${response.status} ${response.statusText}`,
      );
    }

    return response;
  } catch (error) {
    console.log('코드 설정 오류', error);
  }
};

export const postUserInfo = async (
  token: string | null,
  userInfo: userInfo,
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/info`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(userInfo),
        cache: 'no-store',
      },
    );

    if (!response.ok) {
      throw new Error(
        `유저 정보를 보내는 데 실패했습니다: ${response.status} ${response.statusText}`,
      );
    }

    console.log('set user info response : ', response);

    return response;
  } catch (error) {
    console.log('유저 정보 설정 오류', error);
    throw error;
  }
};
