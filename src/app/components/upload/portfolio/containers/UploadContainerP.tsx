import { portThumbnail } from 'ui/bothUI';
import AddThumbnail from '../../both/AddThumbnail';
import SelectFile from '../SelectFileP';
import Editor from 'components/upload/both/editor/Editor';

const UploadContainerP = () => {
  return (
    <div className="flex flex-col w-full h-[1100px] bg-white">
      <AddThumbnail thumbnailInfo={portThumbnail} />
      <div className="flex flex-col w-full h-[740px] overflow-auto">
        <Editor />
      </div>
      <div className="mb-[46px]">
        <SelectFile />
      </div>
    </div>
  );
};

export default UploadContainerP;
