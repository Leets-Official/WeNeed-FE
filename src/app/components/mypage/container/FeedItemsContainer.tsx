'use client';

import FeedItems from '../posts/FeedItems';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { menuState } from 'recoil/mypage';
import Icons from 'components/common/Icons';
import { nextCrewArrow } from 'ui/IconsPath';
import { MY_PAGE } from 'constants/mypage';

interface FeedItemsProps {
  article: FeedItems[];
  sameUser: boolean;
}

const FeedItemsContainer = ({ article, sameUser }: FeedItemsProps) => {
  const selectedMenu = useRecoilValue(menuState);

  return selectedMenu === 'MY CREW' ? (
    <div className="w-full overflow-scroll no-scrollbar mt-6 p-4 h-[60%]">
      <div className="cursor-pointer w-full mb-4 gap-2 text-balck text-lg font-semibold flex items-center">
        {MY_PAGE.MY_FINDING_CREW}
        <Icons name={nextCrewArrow} />
      </div>
      <div className="flex gap-[32px] mb-4 flex-wrap">
        {article.map((article) => (
          <Link
            href={`/portfolio/${article.articleId}`}
            key={article.articleId}
          >
            <FeedItems article={article} />
          </Link>
        ))}
      </div>
      <div className="w-full cursor-pointer mt-12 mb-4 gap-2 text-balck text-lg font-semibold flex items-center">
        {MY_PAGE.MY_APPLYING_CREW}
        <Icons name={nextCrewArrow} />
      </div>
      <div className="flex gap-[32px] mb-4 flex-wrap">
        {article.map((article) => (
          <Link
            href={`/portfolio/${article.articleId}`}
            key={article.articleId}
          >
            <FeedItems article={article} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="w-full overflow-scroll no-scrollbar mt-6 p-4 h-[60%]">
      <div className="w-full mb-4 h-5 text-black text-base font-semibold">
        총 {article.length}개
      </div>
      <div className="flex gap-[32px] flex-wrap">
        {article.map((article) => (
          <Link
            href={`/portfolio/${article.articleId}`}
            key={article.articleId}
          >
            <FeedItems article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedItemsContainer;
