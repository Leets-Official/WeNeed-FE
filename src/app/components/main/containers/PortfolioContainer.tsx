'use client';

import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';
import Pages from 'components/common/Pages';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedSortType } from 'recoil/main';
import PortfolioItemNav from '../portfolio/PortfolioItemNav';
import PortfolioItem from '../portfolio/PortfolioItem';
import Link from 'next/link';

interface PortfolioContainerProps {
  data: PortfolioArticle[];
}

const PortfolioContainer = ({ data }: PortfolioContainerProps) => {
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);
  const [selectedSortTypeValue, setSelectedSortType] =
    useRecoilState(selectedSortType);

  const onClickSortTypes = (sort: SortTypes) => {
    setSelectedSortType(sort);
    setOpenSortModal(false);
  };

  if (data)
    return (
      <div className=" w-full mt-[170px] ">
        <h1 className="mt-[65px] mb-[48px] w-full text-3xl font-semibold">
          {LOGGEDIN_SECTION_HEADINGS.pages}
        </h1>
        <PortfolioItemNav
          sortType={selectedSortTypeValue}
          openSortModal={openSortModal}
          onOpenSortModal={() => setOpenSortModal(!openSortModal)}
          onSelectHandler={onClickSortTypes}
        />
        <div className="flex gap-[32px] flex-wrap">
          {data.map((article) => (
            <Link
              href={`/portfolio/${article.articleId}`}
              key={article.articleId}
            >
              <PortfolioItem article={article} />
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center mt-[80px]">
          <Pages />
        </div>
      </div>
    );
};

export default PortfolioContainer;
