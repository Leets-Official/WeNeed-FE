import Footer from 'components/layout/Footer';
import MainNavbar from 'components/main/common/MainNavbar';
import {
  DetailCategoriesContainer,
  HotPortfolioContainer,
  PortfolioContainer,
  RecommendContainer,
} from 'components/main/containers';

export default async function MainPortfolioPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/portfolio`,
    { cache: 'no-store' },
  );
  const data = await response.json();

  return (
    <section>
      <div className="flex flex-col items-center w-full min-h-screen text-white ">
        <MainNavbar />
        <DetailCategoriesContainer />
        <HotPortfolioContainer />
        <PortfolioContainer />
        <RecommendContainer />
      </div>
      <Footer />
    </section>
  );
}
