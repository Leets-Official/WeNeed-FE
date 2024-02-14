import Icons from 'components/common/Icons';
import { pencil, trashcan } from 'ui/IconsPath';

interface WriterOptionsProps {
  onRecruit?: boolean;
}

const WriterOptions = ({ onRecruit }: WriterOptionsProps) => {
  return (
    <div className="w-full flex justify-center items-center gap-[26px]">
      <div className="flex items-center gap-[10px] cursor-pointer ">
        <Icons name={trashcan} className={`${onRecruit && 'fill-black'}`} />
        <p className="pt-1">삭제하기</p>
      </div>
      |
      <div className="flex items-center gap-[10px] cursor-pointer">
        <Icons name={pencil} className={`${onRecruit && 'fill-black'}`} />
        <p>수정하기</p>
      </div>
    </div>
  );
};

export default WriterOptions;
