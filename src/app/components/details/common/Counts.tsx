import { bookmark, heart } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import GradientBookmark from 'ui/gradient/GradientBookmark';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientView from 'ui/gradient/GradientView';

interface CountsProps {
  count: number[];
  user?: {
    bookmarked: boolean;
    hearted: boolean;
  };
}

const Counts = ({ count, user }: CountsProps) => {
  return (
    <div className="flex gap-[32px] h-[75px] items-center justify-center w-[20%]">
      <p className="flex gap-[10px] cursor-pointer">
        <GradientView width={24} height={18} /> {count[0]}
      </p>
      <p className="flex gap-[10px] cursor-pointer">
        {user?.hearted ? (
          <GradientHeart width={24} height={24} />
        ) : (
          <Icons name={heart} />
        )}
        {count[0]}
      </p>
      <p className="flex  gap-[10px] cursor-pointer">
        {user?.bookmarked ? (
          <GradientBookmark width={17} height={24} />
        ) : (
          <Icons name={bookmark} />
        )}
        {count[0]}
      </p>
    </div>
  );
};

export default Counts;
