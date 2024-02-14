import Icons from 'components/common/Icons';
import { dndDocsIcon } from 'ui/IconsPath';

interface DndDocsProps {
  fileName: string;
}

const DndDocs = ({ fileName }: DndDocsProps) => {
  return (
    <div className="flex">
      <div className="flex items-center h-[35px] px-[22px] py-[9px] gap-x-[16px] rounded-[10px] bg-black">
        <Icons name={dndDocsIcon} />
        <div className="text-[#00E0EE] text-sm font-normal">{fileName}</div>
      </div>
    </div>
  );
};

export default DndDocs;
