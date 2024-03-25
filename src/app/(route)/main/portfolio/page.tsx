'use client';

import Footer from 'components/layout/Footer';
import MainNavbar from 'components/main/common/MainNavbar';
import ReactPaginate from 'react-paginate';
import Header from 'components/layout/Header';
import Icons from 'components/common/Icons';
import useLoginModal from 'hooks/upload/useLoginModal';
import ModalPortal from 'components/common/modal/ModalPortal';
import ModalOutside from 'components/common/modal/ModalOutside';
import {
  DetailCategoriesContainer,
  HotItemsContainer,
  PortfolioContainer,
} from 'components/main/containers';
import { useEffect, useState } from 'react';
import { LOGGEDIN_SECTION_HEADINGS, MAIN_SIZE } from 'constants/main';
import { useRecoilValue } from 'recoil';
import { selectedCategories, selectedSortType } from 'recoil/main';
import { leftAngle, rightAngle } from 'ui/IconsPath';
import { useRouter } from 'next/navigation';
import { setTokens } from 'utils/cookieUtils';
import dynamic from 'next/dynamic';

const NeedLoginModal = dynamic(
  () => import('components/common/modal/NeedLoginModal'),
  {
    suspense: true,
  },
);

const RecommendContainer = dynamic(
  () => import('components/main/containers/RecommendContainer'),
  {
    suspense: true,
  },
);

export default function MainPortfolioPage() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<ResponsePortfolioMain | null>(null);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const selectedCategoriesValue = useRecoilValue(selectedCategories);
  const selectedSortTypeValue = useRecoilValue(selectedSortType);
  const loginModalState = useLoginModal(loginModal);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_NEXT_SERVER
        }/api/main/portfolio?size=${MAIN_SIZE}&page=${page}&sort=${selectedSortTypeValue}&detailTags=${
          selectedCategoriesValue || ''
        }`,
      );
      const responseData = await response.json();
      if (responseData.tokens) {
        setTokens(
          responseData.tokens.accessToken,
          responseData.tokens.refreshToken,
        );
      }
      setData((prev) => responseData);
    };

    fetchData();
  }, [selectedCategoriesValue, page, selectedSortTypeValue]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1);
  };

  const onClickItem = (userId: number, articleId: number) => {
    if (userId == -1) {
      setLoginModal(() => true);
    } else {
      router.push(`/portfolio/${articleId}`);
    }
    return undefined;
  };

  const onClose = () => {
    setLoginModal(false);
  };

  if (data) {
    const {
      articleList,
      hotArticleList,
      pageable,
      recommendArticleList,
      user,
    } = data;

    return (
      <section>
        <Header nickname={user.nickname} userId={user.userId} />
        <div className="flex flex-col items-center justify-center w-full text-white ">
          <MainNavbar nickname={user.nickname} userId={user.userId} />
          <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
            {LOGGEDIN_SECTION_HEADINGS.hot}
          </h1>
          <DetailCategoriesContainer />
          <HotItemsContainer
            data={hotArticleList}
            user={user}
            onClickItem={onClickItem}
          />
          <PortfolioContainer
            data={articleList}
            user={user}
            onClickItem={onClickItem}
          />
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
            pageCount={pageable.totalPages}
            onPageChange={handlePageChange}
            activeClassName={'active text-white'}
            disabledClassName={'pagination-disabled'}
          />
          <RecommendContainer
            data={recommendArticleList}
            user={user}
            onClickItem={onClickItem}
          />
        </div>
        <Footer />
        {loginModalState && (
          <ModalPortal nodeName="needLoginPortal">
            <ModalOutside
              onClose={onClose}
              className="absolute left-0 w-full h-full flex justify-center items-center"
            >
              <NeedLoginModal />
            </ModalOutside>
          </ModalPortal>
        )}
      </section>
    );
  }
}
