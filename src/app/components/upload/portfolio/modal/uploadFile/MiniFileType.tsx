import Icons from 'components/common/Icons';

interface FileTypeProps {
  iconInfo: IconPathTypes;
  title: string;
}

const MiniFileType = ({ iconInfo, title }: FileTypeProps) => {
  return (
    <div className="flex flex-col gap-y-[10px] items-center cursor-pointer">
      <div className="flex items-center justify-center size-[32px] bg-zinc-300">
        <Icons name={iconInfo} className="flex items-center justify-center" />
      </div>
      <p className="text-sm	text-black font-normal">{title}</p>
    </div>
  );
};

export default MiniFileType;
