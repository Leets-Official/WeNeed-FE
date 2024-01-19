import { IconsSVG } from 'components/common/IconsSVG';
import { FileTypeProps } from '../../FileType';

const MiniFileType = ({ iconSvgInfo, title }: FileTypeProps) => {
  return (
    <div className="flex flex-col gap-y-3 items-center cursor-pointer">
      <div className="flex items-center justify-center size-[32px] bg-zinc-300">
        <IconsSVG svgInfo={iconSvgInfo} />
      </div>
      <p className="text-sm	text-black font-normal">{title}</p>
    </div>
  );
};

export default MiniFileType;
