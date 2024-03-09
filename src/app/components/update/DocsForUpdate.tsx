'use client';

import Icons from 'components/common/Icons';
import ModalSelector from 'components/upload/both/modal/ModalSelector';
import useAddFile from 'hooks/upload/useAddFile';
import { useModal } from 'hooks/upload/useModal';
import { deleteFile, dndDocsIcon, updatePen } from 'ui/IconsPath';

interface DocsForUpdateProps {
  fileName: string;
  id: string;
  deleteMode: boolean;
}

const DocsForUpdate = ({ fileName, id, deleteMode }: DocsForUpdateProps) => {
  const { removeFile } = useAddFile();
  const { isOpen, openModal, closeModal } = useModal(false);

  const DeleteDocs = () => {
    removeFile(id, '문서');
  };

  return (
    <div className="flex h-auto">
      <div className="flex items-center h-9 px-5 py-2 gap-x-4 rounded-[10px] bg-black">
        <Icons name={dndDocsIcon} />
        <div className="text-[#00E0EE] text-sm font-normal">{fileName}</div>
        <div onClick={deleteMode ? DeleteDocs : openModal}>
          <Icons name={deleteMode ? deleteFile : updatePen} />
        </div>
        <div>
          {isOpen && (
            <ModalSelector
              fileType={'문서'}
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

export default DocsForUpdate;
