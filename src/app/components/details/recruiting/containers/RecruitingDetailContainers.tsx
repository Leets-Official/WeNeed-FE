'use client';

import ModalOutside from 'components/common/modal/ModalOutside';
import ModalPortal from 'components/common/modal/ModalPortal';
import NeedLoginModal from 'components/common/modal/NeedLoginModal';
import { useEffect, useState } from 'react';

interface RecruitingDetailContainersProps {
  data: RecruitDetailItem;
}

const RecruitingDetailContainers = ({
  data,
}: RecruitingDetailContainersProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      document.body.style.overflow = 'hidden';
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="w-[1280px] min-h-screen bg-white rounded-[10px] mt-[40px] px-[47px] py-[54px]">
        ㅚㄴ니니니
      </div>
      {isLoggedIn && (
        <ModalPortal nodeName="needLoginPortal">
          <ModalOutside
            onClose={() => {}}
            className="absolute top-[63px] left-0 w-full h-full flex justify-center items-center "
          >
            <NeedLoginModal />
          </ModalOutside>
        </ModalPortal>
      )}
    </>
  );
};

export default RecruitingDetailContainers;
