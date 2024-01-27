'use client';
import Icons from 'components/common/Icons';
import { tagCancle } from 'ui/IconsPath';

interface TagItemProps {
  tagName: string;
  tagClick: () => void;
}

const TagItem = ({ tagName, tagClick }: TagItemProps) => {
  return (
    <div className="flex items-center justify-center gap-x-[10px] px-2.5 py-2 rounded-[9px] border border-[#00E0EE]">
      <div className="flex items-center text-neutral-700 text-[16px] h-[19px] font-semibold">
        {tagName}
      </div>
      <div onClick={tagClick}>
        <Icons name={tagCancle} />
      </div>
    </div>
  );
};

export default TagItem;
