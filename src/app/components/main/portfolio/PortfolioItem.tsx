import Image from 'next/image';
import Icons from 'components/common/Icons';
import { bookmark, view } from 'ui/IconsPath';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientBookmark from 'ui/gradient/GradientBookmark';
import GradientItemDefault from 'ui/gradient/GradientItemDefault';
import GradientProfileSM from 'ui/gradient/GradientProfileSM';

interface PortfolioItemsProps {
  article: PortfolioArticle | RecommendArticle | OtherWorkList;
  onRecommend?: boolean;
}

const PortfolioItem = ({ article, onRecommend }: PortfolioItemsProps) => {
  return (
    <div className="relative cursor-pointer w-[285px]">
      <div className="z-20 absolute top-3 right-3">
        {article.bookmarked ? (
          <GradientBookmark width={18} height={25} />
        ) : (
          <Icons name={bookmark} />
        )}
      </div>
      <div className="relative w-[296px] h-[296px] rounded-lg text-sm overflow-hidden">
        {article.thumbnail ? (
          <Image
            src={article.thumbnail}
            width={296}
            height={296}
            alt="postImage"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            quality={40}
            placeholder="blur"
            blurDataURL="data:image/avif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        ) : (
          <GradientItemDefault />
        )}
      </div>
      {onRecommend ? (
        <>
          <p className="absolute z-20 w-[220px] top-[20px] left-[20px] truncate font-semibold">
            {(article as RecommendArticle).title}
          </p>
          <div className="absolute top-0 h-20 w-[296px] bg-gradient-to-t from-transparent to-neutral-950 rounded-md"></div>
        </>
      ) : (
        <div className="flex items-center justify-between w-full h-[35px] mt-[11px]">
          <div className="rounded-full overflow-hidden w-[24px] h-[24px] mb-0.5">
            {(article as PortfolioArticle).profile ? (
              <Image
                width={24}
                height={24}
                alt="writer"
                src={(article as PortfolioArticle).profile || ''}
                style={{
                  objectFit: 'cover',
                }}
              />
            ) : (
              <GradientProfileSM />
            )}
          </div>
          <p className="font-semibold w-[155px] truncate">
            {(article as PortfolioArticle).writerNickname}
          </p>
          {!onRecommend && (
            <div className="flex gap-[10px] justify-center items-center">
              <Icons name={view} />
              <p>{(article as PortfolioArticle).viewCount}</p>
              <GradientHeart width={18} height={25} />
              <p>{(article as PortfolioArticle).heartCount}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
