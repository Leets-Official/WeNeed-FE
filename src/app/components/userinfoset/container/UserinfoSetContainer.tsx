'use client';

import Icons from 'components/common/Icons';
import { setInfoWeneed, loginHome } from 'ui/IconsPath';
import Link from 'next/link';
import Button from 'components/common/Button';

const UserinfoSetContainer = () => {
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
          <Button
            buttonText="확인"
            type="userinfo"
            className="w-[320px] h-[38px] absolute bottom-20 bg-zinc-300 rounded-[10px] justify-center items-center gap-[164px] inline-flex text-black text-xs font-semibold font-['Pretendard']"
            isDisabled={false}
            onClickHandler={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default UserinfoSetContainer;
