export const setEmail = async (email: string) => {
  try {
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
