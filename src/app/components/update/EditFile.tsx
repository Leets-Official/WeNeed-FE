'use client';
import { useModal } from 'hooks/upload/useModal';
import EditIcon from '../../ui/upload/EditIcon';
import SelectFileType from './modal/SelectFileType';

const EditFile = () => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  return (
    <div onClick={openModal}>
      <div>
        <EditIcon />
      </div>
      <div onClick={handleModalClick}>
        {isOpen && <SelectFileType closeSelect={closeModal} />}
      </div>
    </div>
  );
};
export default EditFile;
