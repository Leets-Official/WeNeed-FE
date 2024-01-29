'use client';

import Button from 'components/common/Button';
import Image from 'next/image';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`;
  };

  return (
    <div className="absolute bottom-0 mb-64">
      <Button
        type="userinfo"
        buttonText="Google 계정으로 로그인"
        className="w-[476px] h-[50px] bg-white rounded-lg text-center text-neutral-900 text-sm font-medium font-['Roboto']"
        isDisabled={false}
        onClickHandler={handleGoogleLogin}
      >
        <div className="absolute ml-[22.93px]">
          <Image
            width={20}
            height={20}
            src="/Icons/googleIcon.png"
            alt="Google Logo"
          />
        </div>
      </Button>
    </div>
  );
};

export default GoogleLoginButton;
