import Footer from 'components/layout/Footer';
import MainNavbar from 'components/main/common/MainNavbar';
import {
  DetailCategoriesContainer,
  HotPortfolioContainer,
  PortfolioContainer,
  RecommendContainer,
} from 'components/main/containers';
import { LOGGEDIN_SECTION_HEADINGS, SORT_TYPES } from 'constants/main';

export default async function MainPortfolioPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/portfolio?size=${SORT_TYPES.SIZE}&page=${1}&sort=${'DESC'}&detailTags=${'전체'}`,
  );
  const {
    hotArticleList,
    articleList,
    recommendArticleList,
    pageable,
    user,
  }: ResponsePortfolioMain = await response.json();
  console.log(pageable);

  return (
    <section>
      <div className="flex flex-col items-center w-full min-h-screen text-white ">
        <MainNavbar />
        <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
          {LOGGEDIN_SECTION_HEADINGS.hot}
        </h1>
        <DetailCategoriesContainer />
        <HotPortfolioContainer data={hotArticleList} />
        <PortfolioContainer data={articleList} />
        <RecommendContainer data={recommendArticleList} />
      </div>
      <Footer />
    </section>
  );
}
