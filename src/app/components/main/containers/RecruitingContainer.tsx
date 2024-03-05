'use client';

import Link from 'next/link';
import RecruitingItem from '../recruiting/RecruitingItem';
import Profile from 'components/details/common/Profile';
import useIntersection from 'hooks/main/useIntersection';
import { MouseEventHandler } from 'react';

interface RecruitingContainerProps {
  data: RecruitListItem[];
  user: SimpleUser;
  onIntersect: IntersectionObserverCallback;
  onClickItem: (
    userId: number,
    articleId: number,
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}

const RecruitingContainer = ({
  data,
  user,
  onIntersect,
  onClickItem,
}: RecruitingContainerProps) => {
  const { setTarget } = useIntersection({ onIntersect });

  return (
    <>
      <div className="mt-[75px] flex flex-col gap-[50px] w-full">
        {data.map((article) => {
          const { nickname, major, grade, createdAt, profile, articleId } =
            article;
          return (
            <div
              key={article.articleId}
              onClick={() => onClickItem(user.userId, articleId)}
              className="cursor-pointer"
            >
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
              <RecruitingItem article={article} user={user} />
            </div>
          );
        })}
      </div>
      <div ref={setTarget}></div>
    </>
  );
};

export default RecruitingContainer;
