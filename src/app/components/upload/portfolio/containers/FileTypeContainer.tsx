import { fileIcon } from 'ui/IconsPath';
import FileType from '../FileType';

interface FileTypeContainerProps {
  fileTypeList: readonly string[];
  fileIconPath: readonly string[];
}

const FileTypeContainer = ({
  fileTypeList,
  fileIconPath,
}: FileTypeContainerProps) => {
  return (
    <div className="flex gap-x-[25px]">
      {fileTypeList.map((item, index) => (
        <FileType
          key={item}
          title={item}
          iconInfo={{ ...fileIcon, path: fileIconPath[index] }}
        />
      ))}
    </div>
  );
};

export default FileTypeContainer;
