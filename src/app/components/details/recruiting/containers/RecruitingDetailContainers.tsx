'use client';

import ModalOutside from 'components/common/modal/ModalOutside';
import ModalPortal from 'components/common/modal/ModalPortal';
import NeedLoginModal from 'components/common/modal/NeedLoginModal';
import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
import Profile from 'components/details/common/Profile';
import { useEffect, useState } from 'react';
import RecruitingDetailContents from '../RecruitingDetailContents';

interface RecruitingDetailContainersProps {
  recruit: RecruitDetailItem;
  user: UserProfile;
}

const RecruitingDetailContainers = ({
  recruit,
  user,
}: RecruitingDetailContainersProps) => {
  const {
    writer,
    createdAt,
    viewCount,
    heartCount,
    bookmarkCount,
    tags,
    title,
    contents,
    links,
    files,
    skills,
  } = recruit;
  const { bookmarked, hearted } = user;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoggedIn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isLoggedIn]);

  return (
    <>
      <div className="w-[1280px] min-h-screen  pb-[54px] text-white ">
        <Profile
          writer={writer}
          date={createdAt}
          count={[viewCount, heartCount, bookmarkCount]}
          user={{ bookmarked, hearted }}
          size="large"
        />
        <div className="flex flex-col items-center w-full mt-[40px] min-h-screen bg-white rounded-[10px] py-[54px] px-[47px] ">
          <DetailContentsInfo tags={tags} createdAt={createdAt} recruit />
          <h3 className="flex flex-wrap text-[30px] w-full h-[87px] mt-[49px] font-bold clamp-2 text-black">
            {title}
          </h3>
          <RecruitingDetailContents contents={contents} />
        </div>
      </div>
      {!isLoggedIn && (
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
