import { googleLoginMock } from 'service/googlelogin';
import { NextResponse } from 'next/server';
import { setTokens } from 'utils/cookieUtils';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    console.error('code is null');
    return NextResponse.json({ error: 'code is null' });
  }

  try {
    //const response = await googleLogin(code as string);
    const response = await googleLoginMock(code as string);
    console.log('Google login response Mock Tokens :', response);

    const responseData = response.body ? await response.json() : null;
    console.log('Parsed body: ', responseData);
    return setTokens(
      response,
      responseData.accessToken,
      responseData.refreshToken,
    );
  } catch (error) {
    console.error('Error during Google login:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
