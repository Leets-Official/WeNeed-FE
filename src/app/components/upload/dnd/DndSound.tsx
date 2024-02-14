import Icons from 'components/common/Icons';
import { dndSoundIcon } from 'ui/IconsPath';

interface DndSoundProps {
  link: string;
}

const DndSound = ({ link }: DndSoundProps) => {
  return (
    <div className="flex items-center w-[1206px] h-auto px-[20px] py-[9.5px] bg-zinc-100">
      <div className="flex px-[22px] py-[6px] gap-x-[16px] rounded-[10px] bg-black">
        <Icons name={dndSoundIcon} />
        <div className="text-[#00E0EE] ">{link}</div>
      </div>
    </div>
  );
};

export default DndSound;
