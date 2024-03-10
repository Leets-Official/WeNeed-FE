'use client';

import ModalOutside from 'components/common/modal/ModalOutside';
import ModalPortal from 'components/common/modal/ModalPortal';
import NeedLoginModal from 'components/common/modal/NeedLoginModal';
import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
import { useEffect, useState } from 'react';
import RecruitingDetailContents from '../RecruitingDetailContents';
import WriterOptions from 'components/details/portfolio/WriterOptions';

interface RecruitingDetailContainersProps {
  recruit: RecruitDetailItem;
  user: UserProfile;
  articleId: string;
}

const RecruitingDetailContainers = ({
  recruit,
  user,
  articleId,
}: RecruitingDetailContainersProps) => {
  const { createdAt, tags, title, contents, files, skills, sharedText } =
    recruit;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(user.userId !== -1);

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
      <div className="flex flex-col items-center w-full mt-[40px] min-h-[400px] ">
        <DetailContentsInfo tags={tags} createdAt={createdAt} recruit />
        <h3 className="flex flex-wrap text-[30px] w-full h-[87px] mt-[49px] font-bold clamp-2 text-black">
          {title}
        </h3>
        <RecruitingDetailContents
          contents={contents}
          files={files}
          skills={skills}
        />
        {user.userId !== -1 && (
          <div className="text-black  mt-[100px]">
            {user.sameUser && <WriterOptions onRecruit articleId={articleId} />}
          </div>
        )}
      </div>
      {!isLoggedIn ||
        (user.userId == -1 && (
          <ModalPortal nodeName="needLoginPortal">
            <ModalOutside
              onClose={() => {}}
              className="absolute top-[63px] left-0 w-full h-full flex justify-center items-center "
            >
              <NeedLoginModal />
            </ModalOutside>
          </ModalPortal>
        ))}
    </>
  );
};

export default RecruitingDetailContainers;
