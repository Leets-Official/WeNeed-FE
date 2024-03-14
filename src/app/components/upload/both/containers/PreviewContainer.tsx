import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import Header from 'components/layout/Header';

interface PreviewContainerProps {
  user: UserProfile;
  portfolio: PortfolioDetails;
  closeModal: () => void;
}

const PreviewContainer = ({
  user,
  portfolio,
  closeModal,
}: PreviewContainerProps) => {
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
          portfolio={portfolio}
          articleId={'9999'}
        />
      </div>
    </div>
  );
};

export default PreviewContainer;
