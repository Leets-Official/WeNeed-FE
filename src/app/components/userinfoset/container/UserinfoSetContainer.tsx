'use client';

import Icons from 'components/common/Icons';
import { setInfoWeneed, loginHome } from 'ui/IconsPath';
import Link from 'next/link';
import Button from 'components/common/Button';
import { UNIV_AUTH, USER_INFO } from 'constants/userinfoset';
import { useRouter } from 'next/navigation';
import UnivAuth from '../UnivAuth';
import UserInfo from '../UserInfo';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  univAuthState,
  userInfoSetState,
  userInfoState,
} from 'recoil/userinfo';
import { useEffect } from 'react';

interface UserinfoSetContainerProps {
  slug: string;
}

const fetchData = async (userInfo: userInfo) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/user/info`,
      {
        method: 'POST',
        body: JSON.stringify(userInfo),
      },
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.error('Error during Fetch Data:', error);
    return error;
  }
};

const UserinfoSetContainer = ({ slug }: UserinfoSetContainerProps) => {
  const successUnivAuth = useRecoilValue(univAuthState);
  const [successUserInfoSet, setSuccessUserInfoSet] =
    useRecoilState(userInfoSetState);
  const userInfo = useRecoilValue(userInfoState);

  useEffect(() => {
    if (
      successUserInfoSet.successNickname &&
      userInfo.nickname !== '' &&
      userInfo.userGrade !== 0 &&
      userInfo.major !== '' &&
      userInfo.interestField !== '' &&
      userInfo.doubleMajor !== ''
    ) {
      setSuccessUserInfoSet((prev) => ({ ...prev, canUserInfoSet: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successUserInfoSet.successNickname, userInfo]);

  const pageNum = slug[0];

  const canNext =
    pageNum === '1' ? successUserInfoSet.canUserInfoSet : successUnivAuth;
  const route = useRouter();

  const nextRoute = async () => {
    if (pageNum === '1') {
      const response = await fetchData(userInfo);
      if (response.result) {
        route.push(`/userinfoset/2`);
      }
    } else {
      route.push('/main/portfolio');
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
          {pageNum === '1' ? <UserInfo /> : <UnivAuth />}
          <Button
            buttonText={pageNum === '1' ? UNIV_AUTH.BTN : USER_INFO.BTN}
            type="userinfo"
            className={`w-[320px] h-[38px] absolute bottom-20 ${
              canNext
                ? 'text-white bg-gradient-to-r from-cyan-400 to-blue-500'
                : 'bg-zinc-300 text-black'
            } rounded-[8px] justify-center items-center flex text-xs font-semibold`}
            isDisabled={!canNext}
            onClickHandler={nextRoute}
          />
        </div>
      </div>
    </div>
  );
};

export default UserinfoSetContainer;
