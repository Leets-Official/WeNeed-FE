'use client';

import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
import RecruitingDetailContents from '../RecruitingDetailContents';
import WriterOptions from 'components/details/portfolio/WriterOptions';

interface RecruitingDetailContainersProps {
  recruit: RecruitDetailItem;
  user: UserProfile;
}

const RecruitingDetailContainers = ({
  recruit,
  user,
}: RecruitingDetailContainersProps) => {
  const { createdAt, tags, title, contents, files, links, skills } = recruit;

  return (
    <>
      <div className="flex flex-col items-center w-full mt-[40px] min-h-[400px] ">
        <DetailContentsInfo tags={tags} createdAt={createdAt} recruit />
        <h3 className="flex flex-wrap text-[30px] w-full h-[87px] mt-[49px] font-bold clamp-2 text-black">
          {title}
        </h3>
        <RecruitingDetailContents
          contents={contents}
          links={links}
          files={files}
          skills={skills}
        />
        {user.userId !== -1 && (
          <div className="text-black  mt-[100px]">
            {user.sameUser && <WriterOptions onRecruit />}
          </div>
        )}
      </div>
    </>
  );
};

export default RecruitingDetailContainers;
