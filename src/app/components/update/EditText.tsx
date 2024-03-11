'use client';
import ModalSelector from 'components/upload/both/modal/ModalSelector';
import { transType } from '../../ui/upload/fileType';
import { useModal } from 'hooks/upload/useModal';
import EditIcon from '../../ui/upload/EditIcon';

interface EditTextProps {
  type: string;
  id: string;
  isEdit: boolean;
}

const EditText = ({ type, isEdit, id }: EditTextProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  return (
    <div onClick={openModal}>
      <EditIcon />
      <div onClick={handleModalClick}>
        {isOpen && (
          <ModalSelector
            fileType={transType[type]}
            closeModal={closeModal}
            isEdit={isEdit}
            id={id}
          />
        )}
      </div>
    </div>
  );
};
export default EditText;
