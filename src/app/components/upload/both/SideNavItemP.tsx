'use client';
import Icons from 'components/common/Icons';
import { useModal } from 'hooks/upload/useModal';
import SelectDetailP from '../portfolio/modal/SelectDetailP';
import SearchTeam from '../portfolio/modal/search/SearchTeam';
import PreviewContainer from './containers/PreviewContainer';
import { useRecoilState } from 'recoil';
import { filestate, imageBlobState, uploadDataState } from 'recoil/upload';
import { PORTFOLIO_PREVIEW, USER_PREVIEW } from 'constants/upload';

interface SideNavItemProps {
  iconInfo: IconPathTypes;
  label: string;
  isEdit?: boolean;
  id?: string;
}
type NavComponent = Record<string, JSX.Element>;

const SideNavItemP = ({ iconInfo, label, isEdit, id }: SideNavItemProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const [images, setImages] = useRecoilState<BlobImages[]>(imageBlobState);
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false);
  console.log('데이터, 파일, 이미지');

  console.log('======================================');
  console.log(uploadData);
  console.log(files);
  console.log(images);
  console.log('======================================');

  const previewPF = {
    ...PORTFOLIO_PREVIEW,
  };

  const navComponent: NavComponent = {
    미리보기: (
      <PreviewContainer user={USER_PREVIEW} portfolio={PORTFOLIO_PREVIEW} />
    ),
    업로드: <SelectDetailP closeModal={closeModal} isEdit={isEdit} id={id} />,
    '팀원 추가': <SearchTeam closeModal={closeModal} />,
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

export default SideNavItemP;
