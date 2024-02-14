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
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCategories, selectedSortType } from 'recoil/main';
import ReactPaginate from 'react-paginate';
import Header from 'components/layout/Header';
import Icons from 'components/common/Icons';
import { leftAngle, rightAngle } from 'ui/IconsPath';

export default function MainPortfolioPage() {
  const [selectedSortTypeValue, setSelectedSortType] =
    useRecoilState(selectedSortType);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState<ResponsePortfolioMain | null>(null);
  const selectedCategoriesValue = useRecoilValue(selectedCategories);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_NEXT_SERVER
        }/api/main/portfolio?size=${MAIN_SIZE}&page=${pageNumber}&sort=${selectedSortTypeValue}&detailTags=${
          selectedCategoriesValue || '전체'
        }`,
      );
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, [selectedCategoriesValue, pageNumber]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNumber(() => selected + 1);
  };

  if (data)
    return (
      <section>
        <Header nickname={data.user.nickname} userId={data.user.userId} />
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-white ">
          <MainNavbar />
          <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
            {LOGGEDIN_SECTION_HEADINGS.hot}
          </h1>
          <DetailCategoriesContainer />
          <HotItemsContainer data={data.hotArticleList} />
          <PortfolioContainer data={data.articleList} />
          <ReactPaginate
            className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px] bg-white text-[#868686] font-semibold"
            previousLabel={
              <div className="pt-0.5">
                <Icons name={leftAngle} />
              </div>
            }
            nextLabel={
              <div className="pt-0.5">
                <Icons name={rightAngle} />
              </div>
            }
            breakLabel={'...'}
            pageCount={data.pageable.totalPages}
            onPageChange={handlePageChange}
            activeClassName={'active text-white'}
            disabledClassName={'pagination-disabled'}
          />
          <RecommendContainer data={data.recommendArticleList} />
        </div>
        <Footer />
      </section>
    );
}
