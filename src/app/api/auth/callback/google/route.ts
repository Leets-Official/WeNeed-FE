import { googleLogin } from 'service/googlelogin';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    console.error('code is null');
    return NextResponse.json({ error: 'code is null' });
  }

  try {
    const response = await googleLogin(code as string);
    console.log('Google login response Tokens :', response);
    console.log('Has Registered :', response.hasRegistered);
    let destination = '';
    !response.hasRegistered
      ? (destination = `/userinfoset/1?accessToken=${response.accessToken}&refreshToken=${response.refreshToken}`)
      : (destination = `/`);

    return NextResponse.json({
      destination: destination,
    });
  } catch (error) {
    console.error('Error during Google login:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
