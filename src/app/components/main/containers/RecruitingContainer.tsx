import Link from 'next/link';
import RecruitingItem from '../recruiting/RecruitingItem';
import Profile from 'components/details/common/Profile';

interface RecruitingContainerProps {
  data: RecruitListItem[];
  user: UserProfile;
}

const RecruitingContainer = ({ data, user }: RecruitingContainerProps) => {
  return (
    <div className="mt-[75px] flex flex-col gap-[50px]">
      {data.map((article) => {
        const { nickname, major, grade, createdAt, profile } = article;
        return (
          <div key={article.articleId}>
            <div className="mb-[11px]">
              <Profile
                writer={{
                  major,
                  grade,
                  profile: profile,
                  userId: null,
                  writerNickname: nickname,
                }}
                date={createdAt}
                size="large"
              />
            </div>
            <Link href={`/recruiting/${article.articleId}`}>
              <RecruitingItem article={article} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecruitingContainer;
