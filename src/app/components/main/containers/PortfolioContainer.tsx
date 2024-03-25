'use client';

import PortfolioItemNav from '../portfolio/PortfolioItemNav';
import PortfolioItem from '../portfolio/PortfolioItem';
import { LOGGEDIN_SECTION_HEADINGS } from 'constants/main';
import { MouseEventHandler, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedSortType } from 'recoil/main';

interface PortfolioContainerProps {
  data: PortfolioArticle[];
  user: UserProfile;
  onClickItem: (
    userId: number,
    articleId: number,
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}

const PortfolioContainer = ({
  data,
  user,
  onClickItem,
}: PortfolioContainerProps) => {
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
        <ul className="flex gap-[32px] flex-wrap">
          {data.map((article) => (
            <li
              key={article.articleId}
              onClick={() => onClickItem(user.userId, article.articleId)}
            >
              <PortfolioItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    );
};

export default PortfolioContainer;
