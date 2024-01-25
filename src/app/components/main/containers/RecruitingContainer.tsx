import Link from 'next/link';
import RecruitingItem from '../recruiting/RecruitingItem';

interface RecruitingContainerProps {
  data: RecruitListItem[];
}

const RecruitingContainer = ({ data }: RecruitingContainerProps) => {
  return (
    <div className="mt-[75px] flex flex-col gap-[50px]">
      {data.map((article) => {
        const { nickname, major, grade, createdAt } = article;
        return (
          <div key={article.articleId}>
            {/* <Profile /> */}
            <Link href={`/article/${article.articleId}`}>
              <RecruitingItem article={article} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecruitingContainer;
