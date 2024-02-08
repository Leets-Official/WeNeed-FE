import { NextResponse } from 'next/server';

/* BE real api func */
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
    );
    const responseData = await response.json();
    console.log('This is fetch response in googleLogin : ', responseData);

    return responseData;
  } catch (error) {
    console.log('google login error', error);
    throw error;
  }
};
