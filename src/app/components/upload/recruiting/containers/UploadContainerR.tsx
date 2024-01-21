import { recruitThumbnail } from 'ui/bothUI';
import AddThumbnail from '../../both/AddThumbnail';
import SelectFileR from '../SelectFileR';
import BigSentence from '../BigSentence';

const UploadContainerR = () => {
  return (
    <div className="flex flex-col w-full h-[1100px] bg-white">
      <AddThumbnail thumbnailInfo={recruitThumbnail} />
      <div className="flex flex-col w-full h-[540px]">
        <div>여긴 컨텐츠들 들어갈 곳</div>
      </div>
      <div className="mb-[45px]">
        <SelectFileR />
      </div>
      <BigSentence />
    </div>
  );
};

export default UploadContainerR;
