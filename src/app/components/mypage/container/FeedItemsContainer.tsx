'use client';

import FeedItems from '../posts/FeedItems';
import Link from 'next/link';
import { useRecoilValue, useRecoilState } from 'recoil';
import { menuState, crewTypeState } from 'recoil/mypage';
import Icons from 'components/common/Icons';
import { myLeftAngle, myRightAngle, nextCrewArrow } from 'ui/IconsPath';
import { MY_PAGE } from 'constants/mypage';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

interface FeedItemsProps {
  article1: FeedItems[];
  article2?: FeedItems[];
  sameUser: boolean;
  pageableDto1: Pageable;
  pageableDto2?: Pageable;
  handlePageChange: ({ selected }: { selected: number }) => void;
}

const FeedItemsContainer = ({
  article1,
  article2,
  sameUser,
  pageableDto1,
  pageableDto2,
  handlePageChange,
}: FeedItemsProps) => {
  const selectedMenu = useRecoilValue(menuState);
  const [crewType, setCrewType] = useRecoilState(crewTypeState);
  console.log('crewType', crewType);
  const onClickCrewType = (type: string) => {
    setCrewType(type);
  };

  console.log('totalPages', pageableDto1.totalPages);
  useEffect(() => {
    selectedMenu !== 'MY CREW' && setCrewType('');
  });

  return selectedMenu === 'MY CREW' ? (
    <div className="w-full overflow-scroll no-scrollbar mt-6 p-4 h-[100%]">
      {(crewType === 'recruit' || crewType.length === 0) && (
        <>
          <div
            onClick={() => setCrewType('recruit')}
            className="cursor-pointer w-full mb-4 gap-2 text-balck text-lg font-semibold flex items-center"
          >
            {MY_PAGE.MY_FINDING_CREW}
            {crewType.length === 0 && <Icons name={nextCrewArrow} />}
          </div>
          {crewType === 'recruit' && (
            <div className="w-full mb-4 h-5 text-black text-base font-normal">
              총 {pageableDto1.totalElements}개
            </div>
          )}
          <div className="flex gap-[32px] mb-4 flex-wrap">
            {article1.map((article) => (
              <Link
                key={article.articleId}
                href={`/mypage/apprecruit/${article.articleId}`}
              >
                <FeedItems key={article.articleId} article={article} />
              </Link>
            ))}
          </div>
          {crewType === 'recruit' && (
            <ReactPaginate
              className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
              previousLabel={
                <div className="pt-0.5">
                  <Icons name={myLeftAngle} />
                </div>
              }
              nextLabel={
                <div className="pt-0.5">
                  <Icons name={myRightAngle} />
                </div>
              }
              pageCount={pageableDto1.totalPages}
              onPageChange={handlePageChange}
              activeClassName={'active text-black'}
              disabledClassName={'pagination-disabled'}
            />
          )}
        </>
      )}
      {(crewType === 'applicant' || crewType.length === 0) && (
        <>
          <div
            onClick={() => onClickCrewType('applicant')}
            className={`w-full cursor-pointer ${
              crewType !== 'applicant' && 'mt-12'
            } mb-4 gap-2 text-balck text-lg font-semibold flex items-center`}
          >
            {MY_PAGE.MY_APPLYING_CREW}
            {crewType.length === 0 && <Icons name={nextCrewArrow} />}
          </div>
          {crewType === 'applicant' && (
            <div className="w-full mb-4 h-5 text-black text-base font-normal">
              총 {pageableDto2?.totalElements || article2?.length}개
            </div>
          )}
          <div className="flex gap-[32px] mb-4 flex-wrap">
            {article2?.map((article) => (
              <Link
                key={article.articleId}
                href={`/mypage/apprecruit/${article.articleId}`}
              >
                <FeedItems key={article.articleId} article={article} />
              </Link>
            ))}
          </div>
          {crewType === 'applicant' && (
            <ReactPaginate
              className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
              previousLabel={
                <div className="pt-0.5">
                  <Icons name={myLeftAngle} />
                </div>
              }
              nextLabel={
                <div className="pt-0.5">
                  <Icons name={myRightAngle} />
                </div>
              }
              pageCount={pageableDto2?.totalPages || 1}
              onPageChange={handlePageChange}
              activeClassName={'active text-black'}
              disabledClassName={'pagination-disabled'}
            />
          )}
        </>
      )}
    </div>
  ) : (
    <div className="w-full overflow-scroll no-scrollbar mt-6 p-4 h-[100%]">
      <div className="w-full mb-4 h-5 text-black text-base font-semibold">
        총 {pageableDto1.totalElements}개
      </div>
      <div className="flex gap-[32px] flex-wrap">
        {article1.map((article) => (
          <Link
            key={article.articleId}
            href={`/portfolio/${article.articleId}`}
          >
            <FeedItems key={article.articleId} article={article} />
          </Link>
        ))}
      </div>
      <ReactPaginate
        className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
        previousLabel={
          <div className="pt-0.5">
            <Icons name={myLeftAngle} />
          </div>
        }
        nextLabel={
          <div className="pt-0.5">
            <Icons name={myRightAngle} />
          </div>
        }
        pageCount={pageableDto1.totalPages}
        onPageChange={handlePageChange}
        activeClassName={'active text-black'}
        disabledClassName={'pagination-disabled'}
      />
    </div>
  );
};

export default FeedItemsContainer;
