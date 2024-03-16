'use client';
import { bookmark } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import GradientHeart from 'ui/gradient/GradientHeart';
import GradientView from 'ui/gradient/GradientView';

interface CountsProps {
  count: number[];
}

const AppRecruitCounts = ({ count }: CountsProps) => {
  return (
    <div className="flex gap-[32px] mb-[10%] h-[10%] items-center justify-end w-full">
      <p className="flex gap-[10px] cursor-pointer items-center">
        <GradientView width={20} height={15} /> {count[0]}
      </p>
      <p className="flex gap-[10px] cursor-pointer items-center">
        <GradientHeart width={20} height={20} />
        {count[1]}
      </p>
      <p className="flex  gap-[10px] cursor-pointer items-center">
        <Icons name={bookmark} />
        {count[2]}
      </p>
    </div>
  );
};

export default AppRecruitCounts;
