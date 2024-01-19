import { FILE_TYPE_LIST } from 'constants/portfolio';
import FileType from '../FileType';
import { fileIcon, fileIconPath } from 'ui/IconsPath';

const FileTypeContainer = () => {
  return (
    <div className="flex gap-x-[25px]">
      {FILE_TYPE_LIST.map((item, index) => (
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
