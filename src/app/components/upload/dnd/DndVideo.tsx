import Icons from 'components/common/Icons';
import { dndVideoIcon } from 'ui/IconsPath';

interface DndVideoProps {
  fileName: string;
}

const DndVideo = ({ fileName }: DndVideoProps) => {
  return (
    <div className="flex h-auto">
      <div className="flex items-center h-9 px-5 py-2 gap-x-4 rounded-[10px] bg-black">
        <Icons name={dndVideoIcon} />
        <div className="text-[#00E0EE] text-sm font-normal">{fileName}</div>
      </div>
    </div>
  );
};

export default DndVideo;
