import { closeIcon, miniFileIcon } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import MiniFileType from '../MiniFileType';

interface FileTypeContainerProps {
  fileTypeList: readonly string[];
  fileIconPath: readonly string[];
}

const MiniFileTypeContainer = ({
  fileTypeList,
  fileIconPath,
}: FileTypeContainerProps) => {
  return (
    <div className="flex flex-col w-[922px] h-[190px] rounded-[9px] bg-white">
      <div className="flex flex-row-reverse mt-[15px] mr-[15px]">
        <Icons name={closeIcon} />
      </div>
      <div className="flex justify-center gap-x-[40px] mt-[25px]">
        {fileTypeList.map((item, index) => (
          <MiniFileType
            key={item}
            title={item}
            iconInfo={{ ...miniFileIcon, path: fileIconPath[index] }}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniFileTypeContainer;
