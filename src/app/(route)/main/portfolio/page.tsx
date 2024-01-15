import Footer from 'components/layout/Footer';
import MainNavbar from 'components/main/MainNavbar';
import DetailCategoriesContainer from 'components/main/containers/DetailCategoriesContainer';
import HotPortfolioContainer from 'components/main/containers/HotPortfolioContainer';
import PortfolioContainer from 'components/main/containers/PortfolioContainer';

export default async function MainPortfolioPage() {
  const data = await fetch(`${process.env.NEXT_SERVER}/api/main/portfolio`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });

  return (
    <section>
      <div className="flex flex-col items-center w-full min-h-screen text-white">
        <MainNavbar />
        <DetailCategoriesContainer />
        <HotPortfolioContainer />
        <PortfolioContainer />
      </div>
      <Footer />
    </section>
  );
}
