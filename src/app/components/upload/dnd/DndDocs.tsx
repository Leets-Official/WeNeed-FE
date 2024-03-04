import Icons from 'components/common/Icons';
import { dndDocsIcon } from 'ui/IconsPath';

interface DndDocsProps {
  fileName: string;
}

const DndDocs = ({ fileName }: DndDocsProps) => {
  return (
    <div className="flex items-center h-9 px-5 py-2 gap-x-4 rounded-[10px] bg-black">
      <Icons name={dndDocsIcon} />
      <div className="text-[#00E0EE] text-sm font-normal">{fileName}</div>
    </div>
  );
};

export default DndDocs;
