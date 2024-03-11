'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import SelectDetailR from '../recruiting/modal/SelectDetailR';

interface SideNavItemProps {
  iconInfo: IconPathTypes;
  label: string;
  isEdit?: boolean;
  id?: string;
}

const SideNavItemR = ({ iconInfo, label, isEdit, id }: SideNavItemProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  let navComponent;

  switch (label) {
    case '미리보기':
      navComponent = <SelectDetailR closeModal={closeModal} />;
      break;
    case '업로드':
      navComponent = (
        <SelectDetailR closeModal={closeModal} isEdit={isEdit} id={id} />
      );
      break;
    default:
      break;
  }

  return (
    <div
      onClick={openModal}
      className="flex items-center flex-col gap-y-[10px] cursor-pointer"
    >
      <div className="flex justify-center items-center w-[76px] h-[76px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-[56px]">
        <Icons name={iconInfo} />
      </div>
      <div className="flex justify-center w-auto h-[21px] text-zinc-300 text-[16px]">
        {label}
      </div>
      <div onClick={handleModalClick}>{isOpen && navComponent}</div>
    </div>
  );
};

export default SideNavItemR;
