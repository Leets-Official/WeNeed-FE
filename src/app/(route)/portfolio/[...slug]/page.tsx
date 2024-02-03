import CommentsContainer from 'components/details/portfolio/containers/CommentsContainer';
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
    <section className="min-h-screen flex flex-col items-center bg-black text-white ">
      <Header isLoggedIn type="main" />
      <div className="w-[80%] max-w-[1290px] ">
        <PortfolioDetailsContainer user={user} portfolio={portfolio} />
      </div>
      <CommentsContainer comments={comments} />
      <PortfolioWorkListContainer
        workList={workList}
        writer={portfolio.writer}
      />
    </section>
  );
}
