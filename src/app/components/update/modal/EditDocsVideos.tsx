'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import FileStatus from './FileStatus';

interface EditDocsVideosProps {
  iconInfo: IconPathTypes;
  title: string;
}

const EditDocsVideos = ({ iconInfo, title }: EditDocsVideosProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  return (
    <div
      onClick={openModal}
      className="flex flex-col gap-y-[10px] items-center cursor-pointer"
    >
      <div className="flex items-center justify-center size-[32px] bg-zinc-300">
        <Icons name={iconInfo} className="flex items-center justify-center" />
      </div>
      <div onClick={handleModalClick}>
        <p className="text-sm	text-black font-normal">{title}</p>
        {isOpen && <FileStatus fileType={title} closeStatus={closeModal} />}
      </div>
    </div>
  );
};

export default EditDocsVideos;
