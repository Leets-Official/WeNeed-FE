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
        cache: 'no-store',
      },
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log('google login error', error);
    throw error;
  }
};
