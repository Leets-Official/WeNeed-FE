import { portThumbnail } from 'ui/upload/bothUI';
import AddThumbnail from '../../both/AddThumbnail';
import SelectFile from '../SelectFileP';
import DndContainer from 'components/upload/dnd/DndContainer';
import Header from 'components/layout/Header';
import { docs, link, sound, text } from 'ui/upload/fileType';
import UploadFile from 'components/upload/both/modal/uploadFile/UploadFile';
import Attatched from 'components/upload/dnd/Attatched';

const UploadContainerP = () => {
  return (
    <div className="flex flex-col w-full h-[1210px] ">
      <AddThumbnail thumbnailInfo={portThumbnail} />
      <div className="flex flex-col items-center w-full h-[740px] gap-y-[16px] overflow-auto px-[37px] pt-[36.15px] bg-white">
        <DndContainer />
        <Attatched />
      </div>
      <div className="flex justify-center pb-[46px] bg-white">
        <SelectFile />
      </div>
    </div>
  );
};

export default UploadContainerP;
