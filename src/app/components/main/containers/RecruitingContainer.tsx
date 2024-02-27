'use client';

import Link from 'next/link';
import RecruitingItem from '../recruiting/RecruitingItem';
import Profile from 'components/details/common/Profile';
import useIntersection from 'hooks/main/useIntersection';

interface RecruitingContainerProps {
  data: RecruitListItem[];
  onIntersect: IntersectionObserverCallback;
}

const RecruitingContainer = ({
  data,
  onIntersect,
}: RecruitingContainerProps) => {
  const { setTarget } = useIntersection({ onIntersect });

  return (
    <>
      <div className="mt-[75px] flex flex-col gap-[50px] w-full">
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
      <div ref={setTarget}></div>
    </>
  );
};

export default RecruitingContainer;
