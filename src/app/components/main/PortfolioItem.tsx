import Image from 'next/image';
import Icons from 'components/common/Icons';
import { bookmark, view } from 'ui/IconsPath';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientBookmark from 'ui/gradient/GradientBookmark';

interface PortfolioItemsProps {
  article: PortfolioArticle | RecommendArticle;
  onRecommend?: boolean;
}

const PortfolioItem = ({ article, onRecommend }: PortfolioItemsProps) => {
  return (
    <div className="relative cursor-pointer w-[285px]">
      <div className="z-20 absolute top-3 right-3">
        {article.bookmarked ? <GradientBookmark /> : <Icons name={bookmark} />}
      </div>
      <div className="relative w-[296px] h-[296px] rounded-lg text-sm overflow-hidden">
        <Image
          src={article.thumbnail}
          fill={true}
          alt="postImage"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      {onRecommend ? (
        <>
          <p className="absolute z-10 w-[220px] top-[20px] left-[20px] truncate font-semibold">
            {(article as RecommendArticle).title}
          </p>
          <div className="absolute top-0 h-20 w-[296px] bg-gradient-to-t from-transparent to-neutral-950 rounded-md"></div>
        </>
      ) : (
        <div className="flex justify-between w-full h-[35px] mt-[11px]">
          <div className="flex justify-center items-center gap-[10px]">
            <div className="w-8 h-8 bg-zinc-300 rounded-full"></div>
            <p className="font-semibold w-[130px] truncate">
              {(article as PortfolioArticle).writerNickname}
            </p>
          </div>
          {!onRecommend && (
            <div className="flex gap-[10px] justify-center items-center">
              <Icons name={view} />
              <p>{(article as PortfolioArticle).viewCount}</p>
              <GradientHeart />
              <p>{(article as PortfolioArticle).heartCount}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
