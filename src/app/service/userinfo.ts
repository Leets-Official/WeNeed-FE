export const patchUserInfoEdit = async (
  userInfo: MyPageMyInfoPatch,
  token: string | null,
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/myPage/my-info`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(userInfo),
        cache: 'no-store',
      },
    ).then((res) => res.json());

    console.log('response in patchUserInfoEdit : ', response);
    console.log('userInfo in patchUserInfoEdit : ', userInfo);
    console.log('token in patchUserInfoEdit : ', token);

    return response;
  } catch (error) {
    console.log('Error in patch userinfo edit func : ', error);
    throw error;
  }
};

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
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log('Error in set Email func : ', error);
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
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log('Error in post code func : ', error);
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
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(userInfo),
        cache: 'no-store',
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log('Error in post userinfo func : ', error);
    throw error;
  }
};

export const checkNickname = async (nickName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/checkNickname?nickName=${nickName}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log('Error in check nickname func : ', error);
  }
};
