import Icons from 'components/common/Icons';
import { dndLinkIcon } from 'ui/IconsPath';

interface DndLinkProps {
  link: string;
}

const DndLink = (LinksInfo: DndLinkProps) => {
  const { link } = LinksInfo;
  return (
    <div className="flex items-center w-[1206px] h-auto px-[20px] py-[9.5px] bg-[#EEE]">
      <div className="flex px-[24px] py-[6px] rounded-[10px] gap-x-[17.5px] bg-black">
        <Icons name={dndLinkIcon} />
        <div className="text-[#00E0EE]">{link}</div>
      </div>
    </div>
  );
};

export default DndLink;
