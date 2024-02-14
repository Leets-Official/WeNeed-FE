'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import { addThumbnailIcon } from 'ui/IconsPath';
import { image } from 'ui/upload/fileType';
import UploadThumbnail from './modal/uploadFile/UploadThumbnail';
interface AddThumbnailProps {
  thumbnailInfo: ThumbnailTypes;
}
const AddThumbnail = ({ thumbnailInfo }: AddThumbnailProps) => {
  const { height, bgColor, etcStyles } = thumbnailInfo;
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  return (
    <div className="w-full cursor-pointer" onClick={openModal}>
      <div
        className={`flex items-center justify-center ${height} gap-x-[9px] ${bgColor} text-white font-bold ${etcStyles}`}
      >
        <Icons name={addThumbnailIcon} />
        <p>대표 사진 업로드</p>
        <div onClick={handleModalClick}>
          {isOpen && (
            <UploadThumbnail uploadInfo={image} closeModal={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};
export default AddThumbnail;
