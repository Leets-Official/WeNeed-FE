import Profile from 'components/details/common/Profile';
import RecruitingDetailContainers from 'components/details/recruiting/containers/RecruitingDetailContainers';
import Header from 'components/layout/Header';
import { WRITER_PREVIEW } from 'constants/upload';

interface RecruitPreviewProps {
  user: UserProfile;
  recruiting: RecruitDetailItem;
  closeModal: () => void;
}
const koreanDate = new Date();
koreanDate.setUTCHours(koreanDate.getUTCHours() - 9);

const RecruitPreview = ({
  user,
  recruiting,
  closeModal,
}: RecruitPreviewProps) => {
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
            recruit={recruiting}
            articleId={'9999'}
          />
        </div>
      </div>
    </div>
  );
};

export default RecruitPreview;
