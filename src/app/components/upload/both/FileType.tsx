import Icons from 'components/common/Icons';

interface FileTypeProps {
  iconInfo: IconPathTypes;
  title: string;
}

const FileType = ({ iconInfo, title }: FileTypeProps) => {
  return (
    <div className="flex flex-col gap-y-[17px] items-center cursor-pointer">
      <div className="flex items-center justify-center size-[60px] bg-zinc-300	rounded-md">
        <Icons name={iconInfo} className="flex items-center justify-center" />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
};

export default FileType;
