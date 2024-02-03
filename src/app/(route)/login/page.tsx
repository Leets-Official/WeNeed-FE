import Icons from 'components/common/Icons';
import GoogleLoginButton from 'components/login/GoogleLoginButton';
import Link from 'next/link';
import { loginHome, loginLeest, loginWeneed } from 'ui/IconsPath';
import { LOGIN_SUCCESS } from 'constants/userinfoset';

const LoginPage = () => {
  return (
    <section>
      <div className="bg-login w-screen h-screen bg-cover bg-no-repeat bg-fixed flex justify-center">
        <Icons name={loginLeest} className="absolute top-2" />
        <div className="absolute top-0 mt-44 w-[530px] h-[68px] text-white text-[64px] font-bold font-['Pretendard']">
          {LOGIN_SUCCESS.TITLE}
        </div>
        <Icons name={loginWeneed} className="absolute top-0 mt-60" />
        <GoogleLoginButton />
        <Link href="/main">
          <Icons name={loginHome} className="absolute bottom-5" />
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
