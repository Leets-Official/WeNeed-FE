'use client';

import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
import WriterOptions from 'components/details/portfolio/WriterOptions';
import AppRecruitCounts from '../AppRecruitCounts';
import Image from 'next/image';
import RecruitingDetailContents from 'components/details/recruiting/RecruitingDetailContents';

interface ArticleContainerProps {
  recruit: RecruitDetailItem;
  user: UserProfile;
  articleId: string;
  count: number[];
}

const ArticleContainer = ({
  recruit,
  user,
  articleId,
  count,
}: ArticleContainerProps) => {
  const {
    thumbnail,
    createdAt,
    tags,
    title,
    contents,
    files,
    skills,
    sharedText,
    recruiting,
  } = recruit;

  return (
    <>
      <div className="flex flex-col items-center w-full mt-[3%] min-h-[400px] ">
        {count && <AppRecruitCounts count={count} />}
        <>
          <div
            className={`flex flex-col items-center w-full mt-[40px] min-h-[400px] `}
          >
            <DetailContentsInfo tags={tags} createdAt={createdAt} recruit />
            <h3 className="flex flex-wrap text-[30px] w-full h-[87px] mt-[49px] font-bold clamp-2 text-white">
              {title}
            </h3>
            <div className="relative w-full h-[388px] overflow-hidden rounded-[15px] mt-[15px] mb-[32px]">
              {thumbnail && (
                <Image
                  src={thumbnail}
                  fill={true}
                  style={{ objectFit: 'contain' }}
                  alt="recruitItem"
                />
              )}
            </div>
            <RecruitingDetailContents
              contents={contents}
              files={files}
              skills={skills}
              sharedText={sharedText}
              isInMypage={true}
            />
          </div>
        </>
      </div>
    </>
  );
};

export default ArticleContainer;
