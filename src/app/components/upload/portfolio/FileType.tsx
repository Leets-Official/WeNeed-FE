import { IconsSVGTypes } from '_types/icon';
import { IconsSVG } from '../../common/IconsSVG';

export interface FileTypeProps {
  iconSvgInfo: IconsSVGTypes;
  title: string;
}

const FileType = ({ iconSvgInfo, title }: FileTypeProps) => {
  return (
    <div className="flex flex-col gap-y-[17px] items-center cursor-pointer">
      <div className="flex items-center justify-center size-[60px] bg-zinc-300	rounded-md">
        <IconsSVG svgInfo={iconSvgInfo} />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default FileType;
