import { setEmail } from 'service/userinfo';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'email is null' });
  }

  try {
    const response = await setEmail(email as string);
    console.log('Email fetch :', response);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error during Post Email:', error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
