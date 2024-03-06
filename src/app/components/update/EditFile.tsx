'use client';
import { useModal } from 'hooks/upload/useModal';
import EditIcon from '../../ui/upload/EditIcon';
import SelectFileType from './modal/SelectFileType';

// interface EditFileProps {
// }

const EditFile = () => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  console.log('여기까지 완료');
  console.log(isOpen);
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
