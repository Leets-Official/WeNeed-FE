'use client';

import { checkbox } from 'ui/IconsPath';
import Icons from 'components/common/Icons';
import { APPLICANTIONS } from 'constants/apprecruit';
import GradientCheckBox from 'ui/gradient/GradientCheckBox';
import useOnClickHandlers from 'hooks/apprecruit/useOnclickHandler';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  acceptedListSelectedState,
  acceptedSelectedState,
  pendingListSelectedState,
  pendingSelectedState,
  refusedListSelectedState,
  refusedSelectedState,
} from 'recoil/apprecruit';

interface SelectContainerProps {
  selectedCount: number;
  totalCount: number;
  title: string;
  applicants: ExtendedApplicant[][];
  type: string;
}

const SelectContainer = ({
  totalCount,
  title,
  applicants,
  type,
}: SelectContainerProps) => {
  const { handleSelectedAll, handleAccept, handleReject } =
    useOnClickHandlers();
  const [selectedAllPending] = useRecoilState(pendingListSelectedState);
  const [selectedAllRefused] = useRecoilState(refusedListSelectedState);
  const [selectedAllAccepted] = useRecoilState(acceptedListSelectedState);
  const pendingSelected = useRecoilValue(pendingSelectedState);
  const refusedSelected = useRecoilValue(refusedSelectedState);
  const acceptedSelected = useRecoilValue(acceptedSelectedState);

  const selectedAll =
    type === APPLICANTIONS.PENDING
      ? selectedAllPending
      : type === APPLICANTIONS.ACCEPTED
        ? selectedAllAccepted
        : selectedAllRefused;

  const selectedList =
    type === APPLICANTIONS.PENDING
      ? pendingSelected
      : type === APPLICANTIONS.ACCEPTED
        ? acceptedSelected
        : refusedSelected;
  console.log('selectedList: ', selectedList);
  const calculateNonEmptyArrayList = (arr: ExtendedApplicant[][]) =>
    arr.filter((subArr) => subArr.length > 0);

  const nonEmptyList = calculateNonEmptyArrayList(selectedList);

  console.log('Non-empty List:', nonEmptyList);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90%] flex items-center text-black text-3xl font-bold mb-[40px]">
        {title}
      </div>
      <div className="flex justify-between w-[90%]">
        <div className="flex justify-between items-center w-[15%]">
          <div
            onClick={() => handleSelectedAll(type, applicants)}
            className={`flex items-center justify-center w-[17px] h-[17px] cursor-pointer rounded-[5px] ${
              !selectedAll && 'border border-[#8C8C8C]'
            }`}
          >
            {selectedAll ? (
              <GradientCheckBox width={18} height={18} />
            ) : (
              <Icons name={checkbox} />
            )}
          </div>
          <p className="text-black text-sm font-normal">
            {APPLICANTIONS.ALL_SECTION}
          </p>
          <p className="text-neutral-400 text-sm font-normal">
            ({nonEmptyList.length}/{totalCount})
          </p>
        </div>
        <div className="flex justify-between items-center w-[150px]">
          <p
            onClick={() => handleAccept(nonEmptyList)}
            className="cursor-pointer text-blue-400 w-[56px] flex justify-center items-center pb-1 text-xs font-medium border-b border-b-blue-400"
          >
            {APPLICANTIONS.ACCEPT}
          </p>
          <p className="text-neutral-400">|</p>
          <p
            onClick={() => handleReject(nonEmptyList)}
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
