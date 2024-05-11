export const googleLogin = async (
  authorizationCode: string,
): Promise<ResponseGoogleLogin> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/auth/callback/google?code=${authorizationCode}`, // backend endpoint
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.error('google login error', error);
    throw error;
  }
};
