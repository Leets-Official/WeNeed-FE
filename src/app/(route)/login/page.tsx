import Icons from 'components/common/Icons';
import GoogleLoginButton from 'components/login/GoogleLoginButton';
import Link from 'next/link';
import { loginHome, loginLeest, loginWeneed } from 'ui/IconsPath';
import { LOGIN_SUCCESS } from 'constants/userinfoset';

const LoginPage = () => {
  return (
    <section>
      <div className="relative flex-col items-center bg-login w-screen h-screen bg-cover bg-no-repeat bg-fixed flex ">
        <Icons name={loginLeest} className="top-2" />
        <div className="mt-44 w-fit h-[68px] text-white text-[64px] font-bold font-['Pretendard']">
          {LOGIN_SUCCESS.TITLE}
        </div>
        <Icons name={loginWeneed} />
        <div className="relative mt-28">
          <GoogleLoginButton />
        </div>
        <Link href="/main">
          <Icons name={loginHome} className=" mt-40" />
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
