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
import { selectedCategories, selectedSortType } from 'recoil/main';
import ReactPaginate from 'react-paginate';
import Header from 'components/layout/Header';
import Icons from 'components/common/Icons';
import { leftAngle, rightAngle } from 'ui/IconsPath';

export default function MainPortfolioPage() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [data, setData] = useState<ResponsePortfolioMain | null>(null);
  const selectedCategoriesValue = useRecoilValue(selectedCategories);
  const selectedSortTypeValue = useRecoilValue(selectedSortType);

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
      setData((prev) => responseData);
      console.log(data);
    };

    fetchData();
  }, [selectedCategoriesValue, pageNumber, selectedSortTypeValue]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNumber(() => selected + 1);
  };

  if (data) {
    const {
      articleList,
      hotArticleList,
      pageable,
      recommendArticleList,
      user,
    } = data;
    console.log(data);

    return (
      <section>
        <Header nickname={user.nickname} userId={user.userId} />
        <div className="flex flex-col items-center justify-center w-full  text-white ">
          <MainNavbar />
          <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
            {LOGGEDIN_SECTION_HEADINGS.hot}
          </h1>
          <DetailCategoriesContainer />
          <HotItemsContainer data={hotArticleList} />
          <PortfolioContainer data={articleList} />
          <ReactPaginate
            className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
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
            pageCount={pageable.totalPages}
            onPageChange={handlePageChange}
            activeClassName={'active text-white'}
            disabledClassName={'pagination-disabled'}
          />
          <RecommendContainer data={recommendArticleList} />
        </div>
        <Footer />
      </section>
    );
  }
}
