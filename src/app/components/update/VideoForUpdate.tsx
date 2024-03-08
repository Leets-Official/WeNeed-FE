'use client';

import Icons from 'components/common/Icons';
import ModalSelector from 'components/upload/both/modal/ModalSelector';
import useAddFile from 'hooks/upload/useAddFile';
import { useModal } from 'hooks/upload/useModal';
import { deleteFile, dndVideoIcon, updatePen } from 'ui/IconsPath';

interface VideoForUpdateProps {
  fileName: string;
  id: string;
  deleteMode: boolean;
}

const VideoForUpdate = ({ fileName, id, deleteMode }: VideoForUpdateProps) => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { removeFile } = useAddFile();

  const DeleteVideo = () => {
    removeFile(id, '비디오');
  };

  return (
    <div className="flex h-auto">
      <div className="flex items-center h-9 px-5 py-2 gap-x-4 rounded-[10px] bg-black">
        <Icons name={dndVideoIcon} />
        <div className="text-[#00E0EE] text-sm font-normal">{fileName}</div>
        <div onClick={deleteMode ? DeleteVideo : openModal}>
          <Icons name={deleteMode ? deleteFile : updatePen} />
        </div>
        <div>
          {isOpen && (
            <ModalSelector
              fileType={'비디오'}
              closeModal={closeModal}
              isEdit={true}
              id={id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoForUpdate;
