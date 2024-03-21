'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import SelectDetailP from '../portfolio/modal/SelectDetailP';
import SearchTeam from '../portfolio/modal/search/SearchTeam';
import PortfolioPreview from './containers/PortfolioPreview';
import { useRecoilState } from 'recoil';
import { filestate, uploadDataState, uploadForm } from 'recoil/upload';
import { PORTFOLIO_PREVIEW, USER_PREVIEW } from 'constants/upload';
import { previewAlert, thumbnailAlert } from './showToast';

const SideNavItemP = ({ iconInfo, label, isEdit, id }: SideNavItemProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [uploadFormData, setUploadFormData] =
    useRecoilState<FormData>(uploadForm);
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);

  const koreanDate = new Date();
  koreanDate.setUTCHours(koreanDate.getUTCHours() - 9);

  const fileNames: FileDetail[] = files.map((file) => {
    return {
      fileName: file.id,
      fileUrl: file.id,
    };
  });

  const startPreview = () => {
    if (label === '미리보기') {
      previewAlert();
      openModal();
    } else if (label === '팀원 추가') {
      openModal();
    } else if (uploadData.thumbnail !== '') {
      openModal();
    } else {
      thumbnailAlert();
    }
  };

  const previewPF: PortfolioDetails = {
    ...PORTFOLIO_PREVIEW,
    contents: uploadData.content || '',
    createdAt: String(koreanDate),
    thumbnail: uploadData.thumbnail || '',
    files: fileNames,
    recruiting: false,
  };

  const navComponent: NavComponent = {
    미리보기: (
      <PortfolioPreview
        user={USER_PREVIEW}
        portfolio={previewPF}
        closeModal={closeModal}
      />
    ),
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
