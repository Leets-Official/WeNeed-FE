import Icons from 'components/common/Icons';
import { selectFileIcon } from 'ui/IconsPath';

const SelectFileP = () => {
  return (
    <div className="flex items-center justify-center w-[1200px] h-[66px] gap-x-[10px] cursor-pointer border border-dashed border-neutral-400">
      <Icons name={selectFileIcon} />
      <p className="text-lg font-bold text-black">미디어 추가하기</p>
    </div>
  );
};

export default SelectFileP;
