import { portThumbnail } from 'ui/bothUI';
import AddThumbnail from '../../both/AddThumbnail';
import SelectFile from '../SelectFileP';

const UploadContainerP = () => {
  return (
    <div className="flex flex-col w-full h-[1100px] bg-white">
      <AddThumbnail thumbnailInfo={portThumbnail} />
      <div className="flex flex-col w-full h-[740px]">
        <div>여긴 컨텐츠들 들어갈 곳</div>
      </div>
      <div className="mb-[46px]">
        <SelectFile />
      </div>
    </div>
  );
};

export default UploadContainerP;
