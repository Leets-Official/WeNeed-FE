import Image from 'next/image';
import GradientItemDefault from 'ui/gradient/GradientItemDefault';
import GradientHeart from 'ui/gradient/GradientHeart';
import Icons from 'components/common/Icons';
import { view } from 'ui/IconsPath';

interface FeedItemsProps {
  article: FeedItems;
}

const FeedItems = ({ article }: FeedItemsProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[200px]">
      <div className="relative w-[200px] h-[200px] rounded-lg text-sm overflow-hidden">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            fill={true}
            alt="postImage"
            style={{
              objectFit: 'cover',
            }}
          />
        ) : (
          <GradientItemDefault />
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-black items-center text-xs font-normal">
          {(article as FeedItems).title}
        </div>
        <div className="flex gap-[8px] w-[40%] h-[30%] justify-center items-center">
          <Icons name={view} />
          <p className="text-balck text-sm font-normal">
            {(article as FeedItems).viewCount}
          </p>
          <GradientHeart width={14} height={21} />
          <p className="text-balck text-sm font-normal">
            {(article as FeedItems).heartCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedItems;
