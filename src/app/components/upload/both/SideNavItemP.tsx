'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import SelectDetailP from '../portfolio/modal/SelectDetailP';
import SearchTeam from '../portfolio/modal/search/SearchTeam';
import PortfolioPreview from './containers/PortfolioPreview';
import { useRecoilState } from 'recoil';
import { thumbnailState, uploadDataState } from 'recoil/upload';
import { USER_PREVIEW } from 'constants/upload';
import { noContentsAlert, previewAlert, thumbnailAlert } from './showToast';

const SideNavItemP = ({ iconInfo, label, isEdit, id }: SideNavItemProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [thumbnailData, setThumbnail] = useRecoilState<File | null>(
    thumbnailState,
  );

  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  const koreanDate = new Date();
  koreanDate.setUTCHours(koreanDate.getUTCHours() - 9);

  const startPreview = () => {
    if (label === '미리보기') {
      previewAlert();
      openModal();
    } else if (label === '팀원 추가') {
      openModal();
    } else if (thumbnailData === null) {
      thumbnailAlert();
    } else if (uploadData.content.length < 1) {
      noContentsAlert();
    } else {
      openModal();
    }
  };

  const navComponent: NavComponent = {
    미리보기: <PortfolioPreview user={USER_PREVIEW} closeModal={closeModal} />,
    업로드: <SelectDetailP closeModal={closeModal} isEdit={isEdit} id={id} />,
    '팀원 추가': <SearchTeam closeModal={closeModal} />,
  };

  return (
    <div
      className="flex items-center flex-col gap-y-[10px] cursor-pointer"
      onClick={startPreview}
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

export default SideNavItemP;
