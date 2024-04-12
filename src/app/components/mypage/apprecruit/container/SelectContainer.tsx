'use client';

import { checkbox } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import { APPLICANTIONS } from 'constants/apprecruit';
import GradientCheckBox from 'ui/gradient/GradientCheckBox';
import useOnClickHandlers from 'hooks/apprecruit/useOnclickHandler';
import { useRecoilValue } from 'recoil';
import { selectedAllListState, selectedListItems } from 'recoil/apprecruit';
import { useEffect, useState } from 'react';

interface SelectContainerProps {
  totalCount: number;
  title: string;
  applicants: SelectedStateApllication[];
  type: string;
}

const SelectContainer = ({ totalCount, title, type }: SelectContainerProps) => {
  const { handleSelectedAll, handleAccept, handleReject } =
    useOnClickHandlers();
  const selecteList = useRecoilValue(selectedListItems);
  const selectedAllList = useRecoilValue(selectedAllListState);

  const selectedList =
    type === APPLICANTIONS.PENDING
      ? selecteList.pending.filter((applicant) => applicant.selected)
      : type === APPLICANTIONS.ACCEPTED
        ? selecteList.accepted.filter((applicant) => applicant.selected)
        : selecteList.refused.filter((applicant) => applicant.selected);

  const isSelectedAll =
    totalCount > 0 &&
    (type === APPLICANTIONS.PENDING
      ? selectedAllList.pending
      : type === APPLICANTIONS.ACCEPTED
        ? selectedAllList.accepted
        : selectedAllList.refused);

  console.log('isSelectedAll: ', isSelectedAll);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] flex items-center text-black text-3xl font-bold mb-[40px]">
        {title}
      </div>
      <div className="flex justify-between w-[90%]">
        <div className="flex justify-between items-center w-[20%]">
          <div
            onClick={() => handleSelectedAll(type)}
            className={`flex items-center justify-center w-[17px] h-[17px] cursor-pointer rounded-[5px] ${
              !isSelectedAll && 'border border-[#8C8C8C]'
            }`}
          >
            {isSelectedAll ? (
              <GradientCheckBox width={18} height={18} />
            ) : (
              <Icons name={checkbox} />
            )}
          </div>
          <p className="text-black w-[60px] flex justify-center items-center text-sm font-normal">
            {APPLICANTIONS.ALL_SECTION}
          </p>
          <p className="text-neutral-400 w-[50px] flex items-center text-sm font-normal">
            ({selectedList.length}/{totalCount})
          </p>
        </div>
        <div className="flex justify-between items-center w-[150px]">
          <p
            onClick={() => handleAccept(type)}
            className="cursor-pointer text-blue-400 w-[56px] flex justify-center items-center pb-1 text-xs font-medium border-b border-b-blue-400"
          >
            {APPLICANTIONS.ACCEPT}
          </p>
          <p className="text-neutral-400">|</p>
          <p
            onClick={() => handleReject(type)}
            className="cursor-pointer text-red-400 w-[56px] flex justify-center items-center pb-1 text-xs font-medium border-b border-b-red-400"
          >
            {APPLICANTIONS.REJECT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectContainer;
