import Icons from 'components/common/Icons';
import { pencil, trashcan } from 'ui/IconsPath';

const WriterOptions = () => {
  return (
    <div className="w-full flex justify-center gap-[26px]">
      <div className="flex items-center gap-[10px] cursor-pointer">
        <Icons name={trashcan} />
        <p>삭제하기</p>
      </div>
      |
      <div className="flex items-center gap-[10px] cursor-pointer">
        <Icons name={pencil} />
        <p>수정하기</p>
      </div>
    </div>
  );
};

export default WriterOptions;
