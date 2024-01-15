'use client';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?client_id=${process.env.NEXT_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_GOOGLE_REDIRECT_URI}&response_type=code&scope=${process.env.NEXT_GOOGLE_SCOPE}`;
  };

  return <button onClick={handleGoogleLogin}>Google 로그인</button>;
};

export default GoogleLoginButton;
