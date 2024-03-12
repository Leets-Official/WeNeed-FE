import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import Header from 'components/layout/Header';

interface PreviewContainerProps {
  user: UserProfile;
  portfolio: PortfolioDetails;
}

const PreviewContainer = ({ user, portfolio }: PreviewContainerProps) => {
  return (
    <div className="fixed inset-0 flex min-h-screen justify-center z-50 bg-black overflow-auto scrollbar-hide">
      <div className="w-[80%] max-w-[1290px] ">
        <Header nickname={'사용자'} userId={9999} />
        <PortfolioDetailsContainer
          user={user}
          portfolio={portfolio}
          articleId={'9999'}
        />
      </div>
    </div>
  );
};

export default PreviewContainer;
