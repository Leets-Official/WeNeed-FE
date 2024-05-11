export const patchUserInfoEdit = async (
  userInfo: FormData,
  token: string | null,
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user/myPage/my-info`,
      {
        method: 'PATCH',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: userInfo,
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export const setEmail = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/certify?email=${email}`, // 백엔드 엔드포인트
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error('error', error);
  }
};

export const postCode = async (code: string, email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/certifycode`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, email }),
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error('error', error);
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
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error('error', error);
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
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error('error', error);
  }
};
