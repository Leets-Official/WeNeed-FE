'use client';

import Icons from 'components/common/Icons';
import { SORT_TYPES } from 'constants/main';
import { drop, smallCheck } from 'ui/IconsPath';

interface PortfolioItemNavProps {
  sortType: SortTypes;
  openSortModal: boolean;
  onOpenSortModal: () => void;
  onSelectHandler: (sort: SortTypes) => void;
}

const PortfolioItemNav = ({
  sortType,
  openSortModal,
  onOpenSortModal,
  onSelectHandler,
}: PortfolioItemNavProps) => {
  return (
    <div className="relative w-full border-b border-white pb-[15px] mb-[40px]">
      <div
        className="w-[300px] h-5 flex items-center gap-[10px] cursor-pointer"
        onClick={onOpenSortModal}
      >
        <Icons name={drop} />
        <div className="text-white text-base font-semibold ">
          {SORT_TYPES[sortType]}
        </div>
      </div>
      {openSortModal && (
        <ul className="absolute top-[34px] z-20 bg-black w-[247px] h-[147px] flex flex-col gap-[20px] justify-center items-center border border-white rounded-b-2xl font-semibold">
          {Object.keys(SORT_TYPES).map((type) => (
            <li
              key={type}
              onClick={() => onSelectHandler(type as SortTypes)}
              className="flex justify-between w-full cursor-pointer px-[31px]"
            >
              {SORT_TYPES[type as SortTypes]}
              {sortType === type && (
                <p>
                  <Icons name={smallCheck} />
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PortfolioItemNav;
