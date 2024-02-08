'use client';

import Icons from 'components/common/Icons';
import { setInfoWeneed, loginHome } from 'ui/IconsPath';
import Link from 'next/link';
import Button from 'components/common/Button';
import { UNIV_AUTH, USER_INFO } from 'constants/userinfoset';
import { useRouter } from 'next/navigation';
import UnivAuth from '../UnivAuth';
import UserInfo from '../UserInfo';
import { useRecoilValue } from 'recoil';
import { univAuthState } from 'recoil/userinfo';
import { useEffect } from 'react';

interface UserinfoSetContainerProps {
  slug: string;
}

const UserinfoSetContainer = ({ slug }: UserinfoSetContainerProps) => {
  useEffect(() => {
    const { searchParams } =
      typeof window !== 'undefined'
        ? new URL(window.location.href)
        : { searchParams: new URLSearchParams() };
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    console.log(
      `searchParams: ${searchParams}, accessToken: ${accessToken}, refreshToken: ${refreshToken}`,
    );
  });

  const canNext = useRecoilValue(univAuthState);

  const pageNum = slug[0];
  const route = useRouter();

  const nextRoute = () => {
    if (pageNum === '1') {
      route.push('/userinfoset/2');
    } else {
      route.push('/main');
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="absolute left-0 h-screen w-1/2 flex items-center justify-center">
        <Icons name={setInfoWeneed} className="absolute left-" />
      </div>
      <div className="absolute right-0 h-screen w-1/2 flex items-center justify-center">
        <div className="absolute right-0 my-20 mr-28 w-[480px] h-[580px] bg-white rounded-[15px] flex items-center justify-center">
          <Link href="/main">
            <Icons name={loginHome} className="absolute top-4 right-6" />
          </Link>
          {pageNum === '1' ? <UnivAuth /> : <UserInfo />}
          <Button
            buttonText={pageNum === '1' ? UNIV_AUTH.BTN : USER_INFO.BTN}
            type="userinfo"
            className={`w-[320px] h-[38px] absolute bottom-20 ${
              canNext
                ? 'text-white bg-gradient-to-r from-cyan-400 to-blue-500'
                : 'bg-zinc-300 text-black'
            } rounded-[8px] justify-center items-center flex text-xs font-semibold`}
            isDisabled={
              (pageNum === '1' && !canNext) || (pageNum === '2' && false)
            }
            onClickHandler={nextRoute}
          />
        </div>
      </div>
    </div>
  );
};

export default UserinfoSetContainer;
