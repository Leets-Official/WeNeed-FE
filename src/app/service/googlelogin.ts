import { NextResponse } from 'next/server';
import { setTokens } from 'utils/cookieUtils';

/* BE real api func */
// export const googleLogin = async (
//   authorizationCode: string,
// ): Promise<NextResponse> => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER}/api/auth/callback/google?code=${authorizationCode}`, // backend endpoint
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         cache: 'no-store',
//         credentials: 'include',
//       },
//     );
//     const responseData = await response.json();
//     console.log('This is fetch response in googleLogin : ', responseData);
//     const updatedResponse: NextResponse<unknown> = setTokens(
//       NextResponse.next(response),
//       responseData.accessToken,
//       responseData.refreshToken,
//     );

//     console.log('google login set tokens response : ', updatedResponse);

//     return responseData;
//   } catch (error) {
//     console.log('google login error', error);
//     throw error;
//   }
// };

export async function googleLoginMock(
  code: string,
): Promise<NextResponse<GoogleLoginResponse>> {
  try {
    const responseData = {
      accessToken: 'mockAccessToken123',
      refreshToken: 'mockRefreshToken123',
    };
    return NextResponse.json(responseData);
  } catch (error) {
    console.log('google login error', error);
    throw error;
  }
}
