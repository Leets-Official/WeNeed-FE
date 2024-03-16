'use client';

import DetailContentsInfo from 'components/details/common/DetailContentsInfo';
import WriterOptions from 'components/details/portfolio/WriterOptions';
import ArticleContents from '../ArticleContents';
import AppRecruitCounts from '../AppRecruitCounts';

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
  const { createdAt, tags, title, contents, files, skills, sharedText } =
    recruit;
  const { nickname, userId } = user;

  return (
    <>
      <div className="flex flex-col items-center w-full mt-[3%] min-h-[400px] ">
        {count && <AppRecruitCounts count={count} />}
        <DetailContentsInfo tags={tags} createdAt={createdAt} />
        <h3 className="flex flex-wrap text-[30px] w-full h-[87px] mt-[49px] font-bold clamp-2 text-black">
          {title}
        </h3>
        <ArticleContents
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

export default ArticleContainer;
