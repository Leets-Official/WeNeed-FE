'use client';

import { useRecoilValue } from 'recoil';
import { mypagePatchSuccessState } from 'recoil/mypage';

const IsSuccessEditProfile = () => {
  const patchSuccess = useRecoilValue(mypagePatchSuccessState);

  return (
    <>
      {patchSuccess.isSuccess !== 0 && (
        <div
          className={`fixed w-[60%] left-1/2 transform -translate-x-1/2 rounded-[10px] top-16 p-2 z-20 text-center ${
            patchSuccess.isSuccess === 1
              ? 'bg-[#00E0EE] text-zinc-800'
              : 'bg-red-500 text-white'
          }`}
          style={{
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {patchSuccess.message}
        </div>
      )}
    </>
  );
};

export default IsSuccessEditProfile;
