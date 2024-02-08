import { postCode } from 'service/userinfo';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { email, code } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'email is null' });
  }
  if (!code) {
    return NextResponse.json({ error: 'code is null' });
  }

  try {
    const response = await postCode(code as string, email as string);
    console.log('code fetch :', response);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error during Post Code:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
