'use client';

import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import { closeIcon } from 'ui/IconsPath';
import DeleteIcon from 'ui/upload/DeleteIcon';

interface SelectFileTypeProps {
  deleteText: () => void;
}

const CheckDelete = ({ deleteText }: SelectFileTypeProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  return (
    <div>
      <div onClick={openModal}>
        <DeleteIcon />
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="flex flex-col w-96 h-48 bg-white rounded-lg">
            <div
              onClick={closeModal}
              className="flex flex-row-reverse mt-[15px] mr-[15px]"
            >
              <Icons name={closeIcon} className="cursor-pointer" />
            </div>
            <div className="flex flex-col items-center">
              <div className="mt-8 mb-10">해당 파일을 삭제하시겠어요?</div>
              <div className="flex gap-x-8">
                <div
                  className="flex items-center justify-center w-36 h-8 text-sm bg-zinc-300 cursor-pointer hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-white"
                  onClick={deleteText}
                >
                  네
                </div>
                <div
                  className="flex items-center justify-center w-36 h-8 text-sm bg-zinc-300 cursor-pointer"
                  onClick={closeModal}
                >
                  아니요
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckDelete;
