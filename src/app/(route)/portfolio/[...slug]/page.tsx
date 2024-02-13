import CommentsContainer from 'components/details/portfolio/containers/CommentsContainer';
import PortfolioDetailsContainer from 'components/details/portfolio/containers/PortfolioDetailsContainer';
import PortfolioWorkListContainer from 'components/details/portfolio/containers/PortfolioWorkListContainer';
import Header from 'components/layout/Header';

export default async function PortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/portfolio?articleId=${params.slug[0]}`,
    { cache: 'no-store' },
  );
  const { user, portfolio, comments, workList }: ResponsePortfolioDetails =
    await response.json();

  if (user && portfolio && comments && workList) {
    return (
      <section className="min-h-screen flex flex-col items-center bg-black text-white ">
        <Header isLoggedIn type="main" nickname={user.nickname} />
        <div className="w-[80%] max-w-[1290px] ">
          <PortfolioDetailsContainer
            user={user}
            portfolio={portfolio}
            articleId={params.slug[0]}
          />
        </div>
        <CommentsContainer
          comments={comments}
          articleId={params.slug}
          user={user}
        />
        <PortfolioWorkListContainer
          workList={workList}
          writer={portfolio?.writer}
        />
      </section>
    );
  }
}
