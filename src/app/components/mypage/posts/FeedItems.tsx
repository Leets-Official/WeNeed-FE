import Image from 'next/image';
import GradientItemDefault from 'ui/gradient/GradientItemDefault';
import GradientHeart from 'ui/gradient/GradientHeart';
import Icons from 'components/common/Icons';
import { view } from 'ui/IconsPath';
import GradientProfileSM from 'ui/gradient/GradientProfileSM';

interface FeedItemsProps {
  article: FeedItems | FeedItems2;
}

const FeedItems = ({ article }: FeedItemsProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-[200px]">
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
      <div className="flex justify-center items-center gap-[10px]">
        {article.teamProfiles.length !== 0 && (
          <div className="z-10 absolute top-1 left-2 flex ml-[10px]">
            {article.teamProfiles.map((profile: string, index) => (
              <div key={profile + `${index}`} className="ml-[-10px]">
                {profile !== null ? (
                  <Image
                    width={24}
                    height={24}
                    alt="writer"
                    src={profile}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <GradientProfileSM />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="text-black w-[100px] overflow-x-hidden overflow-ellipsis wh text-nowrap items-center text-xs font-normal">
          {article.title}
        </div>
        <div className="flex gap-[8px] w-[40%] h-[30%] justify-center items-center">
          <Icons name={view} />
          <p className="text-balck text-sm font-normal">{article.viewCount}</p>
          <GradientHeart width={14} height={21} />
          <p className="text-balck text-sm font-normal">{article.heartCount}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedItems;
