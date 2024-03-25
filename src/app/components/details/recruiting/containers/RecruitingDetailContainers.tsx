import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
import RecruitingDetailContents from '../RecruitingDetailContents';
import WriterOptions from 'components/details/portfolio/WriterOptions';
import Image from 'next/image';

interface RecruitingDetailContainersProps {
  recruit: RecruitDetailItem;
  user: UserProfile;
  articleId: string;
  isPreview?: boolean;
}

const RecruitingDetailContainers = ({
  recruit,
  user,
  articleId,
  isPreview,
}: RecruitingDetailContainersProps) => {
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
  const { nickname, userId } = user;

  return (
    <>
      <div
        className={`flex flex-col items-center w-full mt-[40px] min-h-[400px]  ${
          isPreview ? 'pointer-events-none' : ''
        }`}
      >
        <DetailContentsInfo tags={tags} createdAt={createdAt} recruit />
        <h3 className="flex flex-wrap text-[30px] w-full h-[87px] mt-[49px] font-bold clamp-2 text-black">
          {title}
        </h3>
        <div className="relative w-full h-[388px] overflow-hidden rounded-[15px] mt-[15px] mb-[32px]">
          {thumbnail && (
            <Image
              src={thumbnail}
              fill={true}
              style={{ objectFit: 'contain' }}
              alt="recruitItem"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPUqgcAANkAq7rAn7QAAAAASUVORK5CYII="
            />
          )}
        </div>
        <RecruitingDetailContents
          contents={contents}
          files={files}
          skills={skills}
          sharedText={sharedText}
        />
        {userId !== -1 && (
          <div className="text-black  mt-[100px]">
            {user.sameUser && (
              <WriterOptions
                nickname={nickname}
                userId={userId}
                onRecruit
                recruiting={recruiting}
                articleId={articleId}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default RecruitingDetailContainers;
