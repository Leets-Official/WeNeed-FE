import Icons from 'components/common/Icons';
import GoogleLoginButton from 'components/login/GoogleLoginButton';
import Link from 'next/link';
import { loginHome, loginLeest, loginWeneed } from 'ui/IconsPath';

const LoginPage = () => {
  return (
    <div className="bg-login w-screen h-screen bg-cover bg-no-repeat bg-fixed flex justify-center scrollbar-hide">
      <Icons name={loginLeest} className="absolute top-2" />
      <div className="absolute top-0 mt-44 w-[530px] h-[68px] text-white text-[64px] font-bold font-['Pretendard']">
        WE NEED, WIN IT.
      </div>
      <Icons name={loginWeneed} className="absolute top-0 mt-60" />
      <GoogleLoginButton />
      <Link href="/main">
        <Icons name={loginHome} className="absolute bottom-5" />
      </Link>
    </div>
  );
};

export default LoginPage;
