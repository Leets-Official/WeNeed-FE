import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import React from 'react';
import { selectFileRIcon } from 'ui/IconsPath';
import ModalSelector from '../both/modal/ModalSelector';

interface BigSentenceProps {
  isEdit: boolean;
}

const BigSentence = ({ isEdit }: BigSentenceProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  return (
    <div
      onClick={openModal}
      className="flex items-center justify-center gap-x-[31px] w-full h-[158.17px] mt-2 bg-white cursor-pointer"
    >
      <div className="w-5 h-[22px]">
        <Icons name={selectFileRIcon} />
      </div>
      <p className="text-lg font-bold text-[#CFCFCF]">나누고 싶은 큰 문장</p>
      <div onClick={handleModalClick}>
        {isOpen && (
          <ModalSelector
            fileType={'나누고 싶은 문장'}
            closeModal={closeModal}
            isEdit={isEdit}
          />
        )}
      </div>
    </div>
  );
};

export default BigSentence;
