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

type NavComponent = Record<string, JSX.Element>;

const SideNavItemR = ({ iconInfo, label, isEdit, id }: SideNavItemProps) => {
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  const navComponent: NavComponent = {
    미리보기: <SelectDetailR closeModal={closeModal} />,
    업로드: <SelectDetailR closeModal={closeModal} isEdit={isEdit} id={id} />,
  };

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
      <div onClick={handleModalClick}>{isOpen && navComponent[label]}</div>
    </div>
  );
};

export default SideNavItemR;
