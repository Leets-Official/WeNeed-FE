import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import React from 'react';
import { selectFileRIcon } from 'ui/IconsPath';
import ModalSelector from '../both/modal/ModalSelector';
import { useRecoilState } from 'recoil';
import { uploadDataState } from 'recoil/upload';

interface BigSentenceProps {
  isEdit: boolean;
}

const BigSentence = ({ isEdit }: BigSentenceProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  const [uploadData, setUploadData] =
    useRecoilState<UploadPFTypes>(uploadDataState);
  return (
    <div
      onClick={openModal}
      className="flex items-center justify-center gap-x-[31px] w-full h-[158.17px] mt-2 bg-white cursor-pointer"
    >
      <div>
        {uploadData.sharedText ? (
          <div className="flex flex-col text-3xl font-bold gap-y-3">
            <p>입력된 문장 : {uploadData.sharedText}</p>
            <div className="flex items-center justify-center gap-x-4">
              <div className="w-5 h-[22px]">
                <Icons name={selectFileRIcon} />
              </div>
              <p className="text-xl font-bold text-[#CFCFCF]">문장 수정하기</p>{' '}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-[31px]">
            <div className="w-5 h-[22px]">
              <Icons name={selectFileRIcon} />
            </div>
            <p className="text-lg font-bold text-[#CFCFCF]">
              나누고 싶은 큰 문장
            </p>
          </div>
        )}
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
    </div>
  );
};

export default BigSentence;
