'use client';

import RecruitingItem from '../recruiting/RecruitingItem';
import Profile from 'components/details/common/Profile';
import useIntersection from 'hooks/main/useIntersection';
import { MouseEventHandler } from 'react';
import RecruitingItemMenuBar from '../recruiting/RecruitingItemMenuBar';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <>
      <div className="mt-[75px] flex flex-col gap-[50px] w-full text-white">
        {data?.map((article) => {
          const { nickname, major, grade, createdAt, profile, articleId } =
            article;
          return (
            <div className="flex flex-col " key={article.articleId}>
              <div className="cursor-pointer">
                <div
                  className="mb-[11px]"
                  onClick={() => router.push(`/mypage/${user.userId}`)}
                >
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
                <div className="bg-white rounded-2xl pt-[40px] text-black px-[43px]">
                  <div
                    className=" "
                    onClick={() => onClickItem(user.userId, articleId)}
                  >
                    <RecruitingItem article={article} />
                  </div>
                  <RecruitingItemMenuBar
                    page="recruiting"
                    article={article}
                    user={user}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div ref={setTarget}></div>
    </>
  );
};

export default RecruitingContainer;
