import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
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
  const { nickname, userId } = user;

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
          sharedText={sharedText}
        />
        {userId !== -1 && (
          <div className="text-black  mt-[100px]">
            {user.sameUser && (
              <WriterOptions
                nickname={nickname}
                userId={userId}
                onRecruit
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
