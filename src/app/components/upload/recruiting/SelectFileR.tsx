import Icons from 'components/common/Icons';
import { selectFileRIcon } from 'ui/IconsPath';

const SelectFileR = () => {
  return (
    <div className="flex items-center justify-center w-[1206px] h-[66px] gap-x-[31px] cursor-pointer border border-dashed border-neutral-400">
      <Icons name={selectFileRIcon} />
      <p className="text-lg font-bold text-[#CFCFCF]">미디어 추가하기</p>
    </div>
  );
};

export default SelectFileR;
