'use client';

import Profile from 'components/details/common/Profile';
import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';
import { PORTFOLIO_PREVIEW, WRITER_PREVIEW } from 'constants/upload';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  textState,
  uploadDataState,
  thumbnailState,
  thumbnailUrlState,
} from 'recoil/upload';

interface RecruitPreviewProps {
  user: UserProfile;
  closeModal: () => void;
}
const koreanDate = new Date();
koreanDate.setUTCHours(koreanDate.getUTCHours() - 9);

const RecruitPreview = ({ user, closeModal }: RecruitPreviewProps) => {
  const [uploadData, setUploadData] = useRecoilState(uploadDataState);
  const [items, setItems] = useRecoilState(textState);
  const [thumbnail, setThumbnail] = useRecoilState<File | null>(thumbnailState);
  const [thumbnailUrlData, setThumbnailUrl] = useRecoilState(thumbnailUrlState);

  let thumbnailURL = '';
  if (thumbnail) {
    thumbnailURL = URL.createObjectURL(thumbnail);
  } else {
    thumbnailURL = thumbnailUrlData;
  }

  useEffect(() => {
    setUploadData({ ...uploadData, content: items });
  }, [items]);

  const previewRecruit: RecruitDetailItem = {
    ...PORTFOLIO_PREVIEW,
    contents: uploadData.content || '',
    createdAt: String(koreanDate),
    thumbnail: thumbnailURL || '',
    commentCount: 0,
    recruiting: true,
    hasApplied: false,
    sharedText: uploadData.sharedText || '',
  };

  return (
    <div
      className="fixed inset-0 flex min-h-screen justify-center z-50 bg-black overflow-auto scrollbar-hide"
      onDoubleClick={closeModal}
    >
      <div className="w-[80%] max-w-[1280px] text-white">
        <Header nickname={'사용자'} userId={9999} isPreview={true} />
        <div className="my-[40px] ">
          <Profile
            writer={WRITER_PREVIEW}
            date={String(koreanDate)}
            count={[999, 999, 999]}
            user={{ bookmarked: true, hearted: true }}
            size="large"
          />
        </div>
        <div className="bg-white rounded-[10px] py-[54px] px-[47px] mb-[100px]">
          <RecruitingDetailContainers
            isPreview={true}
            user={user}
            recruit={previewRecruit}
            articleId={'9999'}
          />
        </div>
      </div>
    </div>
  );
};

export default RecruitPreview;
