'use client';

import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import Header from 'components/layout/Header';
import { PORTFOLIO_PREVIEW } from 'constants/upload';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  filestate,
  textState,
  thumbnailState,
  uploadDataState,
} from 'recoil/upload';

interface PortfolioPreviewProps {
  user: UserProfile;
  closeModal: () => void;
}
const koreanDate = new Date();
koreanDate.setUTCHours(koreanDate.getUTCHours() - 9);
const PortfolioPreview = ({ user, closeModal }: PortfolioPreviewProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [thumbnail, setThumbnail] = useRecoilState<File | null>(thumbnailState);
  const [items, setItems] = useRecoilState(textState);
  const [files, setFiles] = useRecoilState<DNDFileTypes[]>(filestate);
  const fileNames: FileDetail[] = files.map((file) => {
    return {
      fileName: file.id,
      fileUrl: file.id,
    };
  });
  useEffect(() => {
    setUploadData({ ...uploadData, content: items });
  }, [items]);
  let thumbnailURL = '';
  if (thumbnail) {
    thumbnailURL = URL.createObjectURL(thumbnail);
  }

  const previewRecruit: RecruitDetailItem = {
    ...PORTFOLIO_PREVIEW,
    contents: uploadData.content || '',
    createdAt: String(koreanDate),
    thumbnail: thumbnailURL || '',
    recruiting: true,
    commentCount: 0,
    files: fileNames,
    sharedText: uploadData.sharedText || '',
  };

  return (
    <div
      className="fixed inset-0 flex min-h-screen justify-center z-50 bg-black overflow-auto scrollbar-hide"
      onDoubleClick={closeModal}
    >
      <div className="w-[80%] max-w-[1280px]">
        <Header nickname={'사용자'} userId={9999} isPreview={true} />
        <PortfolioDetailsContainer
          isPreview={true}
          user={user}
          portfolio={previewRecruit}
          articleId={'9999'}
        />
      </div>
    </div>
  );
};

export default PortfolioPreview;
