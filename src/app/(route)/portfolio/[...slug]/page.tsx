import PortfolioCommentsContainer from 'components/details/portfolio/containers/PortfolioCommentsContainer';
import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import PortfolioWorkListContainer from 'components/details/portfolio/containers/PortfolioWorkListContainer';
import Header from 'components/layout/Header';

export default async function PortfolioPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio`,
    { cache: 'no-store' },
  );
  const { user, portfolio, comments, workList }: ResponsePortfolioDetails =
    await response.json();

  return (
    <section className="h-screen">
      <Header isLoggedIn type="main" />
      <PortfolioDetailsContainer user={user} portfolio={portfolio} />
      <PortfolioCommentsContainer comments={comments} />
      <PortfolioWorkListContainer
        workList={workList}
        writer={portfolio.writer}
      />
    </section>
  );
}
