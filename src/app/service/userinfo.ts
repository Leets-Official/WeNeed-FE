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
          authorization: 'Bearer ' + token,
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
