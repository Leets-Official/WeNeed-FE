'use client';

import { useEffect, useState } from 'react';
import Footer from 'components/layout/Footer';
import MainNavbar from 'components/main/common/MainNavbar';
import {
  DetailCategoriesContainer,
  HotItemsContainer,
  PortfolioContainer,
  RecommendContainer,
} from 'components/main/containers';
import { LOGGEDIN_SECTION_HEADINGS, MAIN_SIZE } from 'constants/main';
import { useRecoilValue } from 'recoil';
import { selectedCategories } from 'recoil/main';
import Header from 'components/layout/Header';

export default function MainPortfolioPage() {
  const selectedCategoriesValue = useRecoilValue(selectedCategories);
  const [data, setData] = useState<ResponsePortfolioMain | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_NEXT_SERVER
        }/api/main/portfolio?size=${MAIN_SIZE}&page=${1}&sort=${'DESC'}&detailTags=${
          selectedCategoriesValue || '전체'
        }`,
      );
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, [selectedCategoriesValue]);

  if (data)
    return (
      <section>
        <Header nickname={data.user.nickname} userId={data.user.userId} />
        <div className="flex flex-col items-center w-full min-h-screen text-white ">
          <MainNavbar />
          <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
            {LOGGEDIN_SECTION_HEADINGS.hot}
          </h1>
          <DetailCategoriesContainer />
          <HotItemsContainer data={data.hotArticleList} />
          <PortfolioContainer data={data.articleList} />
          <RecommendContainer data={data.recommendArticleList} />
        </div>
        <Footer />
      </section>
    );
}
