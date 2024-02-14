import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import { miniFileIconPath_R, selectFileRIcon } from 'ui/IconsPath';
import MiniFileTypeContainer from '../both/containers/MiniFileTypeContainer';
import { FILE_TYPE_RECRUITING } from 'constants/recruit';

const SelectFileR = () => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  return (
    <div
      onClick={openModal}
      className="flex items-center justify-center w-[1206px] h-[66px] gap-x-[31px] cursor-pointer border border-dashed border-neutral-400"
    >
      <Icons name={selectFileRIcon} />
      <div onClick={handleModalClick}>
        <p className="text-lg font-bold text-[#CFCFCF]">미디어 추가하기</p>
        {isOpen && (
          <MiniFileTypeContainer
            fileTypeList={FILE_TYPE_RECRUITING}
            fileIconPath={miniFileIconPath_R}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default SelectFileR;
