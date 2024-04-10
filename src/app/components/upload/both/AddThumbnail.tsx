'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import { addThumbnailIcon } from 'ui/IconsPath';
import { image, thumbnail } from 'ui/upload/fileType';
import UploadThumbnail from './modal/uploadFile/UploadThumbnail';
import { useRecoilState } from 'recoil';
import { thumbnailState, thumbnailUrlState } from 'recoil/upload';
import Image from 'next/image';

interface AddThumbnailProps {
  thumbnailInfo: ThumbnailTypes;
}

const AddThumbnail = ({ thumbnailInfo }: AddThumbnailProps) => {
  const { height, bgColor, etcStyles } = thumbnailInfo;
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  const [thumbnailData, setThumbnail] = useRecoilState<File | null>(
    thumbnailState,
  );
  const [thumbnailUrl, setThumbnailUrl] = useRecoilState(thumbnailUrlState);

  return (
    <div className="w-full cursor-pointer" onClick={openModal}>
      <div
        className={`flex items-center justify-center ${height} gap-x-3 ${bgColor} text-white font-bold ${etcStyles}`}
      >
        {thumbnailData || thumbnailUrl ? (
          <div className="flex flex-col text-lg gap-y-3">
            <div className="flex justify-around">
              <div>선택된 대표 사진</div>
            </div>
            <Image
              src={
                thumbnailData
                  ? URL.createObjectURL(thumbnailData)
                  : thumbnailUrl
              }
              alt="Thumbnail"
              {...thumbnail}
            />
            <div className="flex gap-x-3 items-center justify-center">
              <Icons name={addThumbnailIcon} />
              <div>클릭 시 대표 사진 변경</div>
            </div>
          </div>
        ) : (
          <div className="flex gap-x-3">
            <Icons name={addThumbnailIcon} />
            <p>대표 사진 업로드</p>
          </div>
        )}
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
