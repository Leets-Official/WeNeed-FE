'use client';
import Icons from 'components/common/Icons';
import ModalSelector from './modal/ModalSelector';
import { useModal } from 'hooks/upload/useModal';

interface FileTypeProps {
  iconInfo: IconPathTypes;
  title: string;
}

const FileType = ({ iconInfo, title }: FileTypeProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  return (
    <div
      onClick={openModal}
      className="flex flex-col gap-y-[17px] items-center cursor-pointer"
    >
      <div className="flex items-center justify-center size-[60px] bg-zinc-300	rounded-md">
        <Icons name={iconInfo} className="flex items-center justify-center" />
      </div>
      <div onClick={handleModalClick}>
        <p className="font-semibold">{title}</p>
        {isOpen && <ModalSelector fileType={title} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default FileType;
