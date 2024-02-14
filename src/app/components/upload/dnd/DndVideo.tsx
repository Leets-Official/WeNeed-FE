import Icons from 'components/common/Icons';
import { dndVideoIcon } from 'ui/IconsPath';

interface DndVideoProps {
  fileName: string;
}

const DndVideo = ({ fileName }: DndVideoProps) => {
  return (
    <div className="flex">
      <div className="flex items-center h-[36px] px-[21px] py-[6px] gap-x-[17.5px] rounded-[10px] bg-black">
        <Icons name={dndVideoIcon} />
        <div className="flex text-[#00E0EE] text-sm font-normal">
          {fileName}
        </div>
      </div>
    </div>
  );
};

export default DndVideo;
