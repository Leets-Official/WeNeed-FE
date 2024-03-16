'use client';

import { useEffect, useState } from 'react';
import Icons from 'components/common/Icons';
import useOnClickHandlers from 'hooks/apprecruit/useOnclickHandler';
import {
  applicantShareBlack,
  applicantShareWhite,
  checkbox,
} from 'ui/IconsPath';
import GradientCheckBox from 'ui/gradient/GradientCheckBox';
import GradientProfileMD from 'ui/gradient/GradientProfileMD';
import { useSetRecoilState } from 'recoil';
import {
  acceptedSelectedState,
  pendingSelectedState,
  refusedSelectedState,
} from 'recoil/apprecruit';
import { APPLICANTIONS } from 'constants/apprecruit';
import Image from 'next/image';

interface ApplicantListProps {
  applicantsData: ExtendedApplicant[][];
  type: string;
}

const ApplicantList = ({ applicantsData, type }: ApplicantListProps) => {
  const [applicants, setApplicants] = useState(applicantsData);
  const { handleSelect } = useOnClickHandlers();
  const setPendingSelectedState = useSetRecoilState(pendingSelectedState);
  const setAcceptedSelectedState = useSetRecoilState(acceptedSelectedState);
  const setRefusedSelectedState = useSetRecoilState(refusedSelectedState);

  useEffect(() => {
    setApplicants(applicantsData);
  }, [applicantsData]);

  const handleSelectAndUpdate = (rowIndex: number, id: number) => {
    const { updatedApplicants, selectApplicant } = handleSelect(
      rowIndex,
      id,
      applicants,
    );
    setApplicants(updatedApplicants);

    type === APPLICANTIONS.PENDING
      ? setPendingSelectedState(selectApplicant)
      : type === APPLICANTIONS.ACCEPTED
        ? setAcceptedSelectedState(selectApplicant)
        : setRefusedSelectedState(selectApplicant);
  };

  return (
    <div className="w-full flex gap-8 flex-col items-center">
      {applicants.map((applicantRow, index) => (
        <div key={index} className="w-full">
          {applicantRow.map((applicant, i) => (
            <div
              key={applicant.applicationId}
              className={`flex relative border-black items-center w-full h-[140px] border ${
                applicant.selected ? ' bg-black' : 'bg-white'
              } rounded-[15px] mb-4`}
            >
              <div
                onClick={() => {
                  handleSelectAndUpdate(index, applicant.applicationId);
                }}
                className={`ml-6 flex items-center justify-center w-[17px] h-[17px] cursor-pointer rounded-[5px] ${
                  !applicant.selected && 'border border-[#8C8C8C]'
                }`}
              >
                {applicant.selected ? (
                  <GradientCheckBox width={18} height={18} />
                ) : (
                  <Icons name={checkbox} />
                )}
              </div>
              <div className="w-[57px] mx-10">
                {applicant.user.profile ? (
                  <Image
                    src={applicant.user.profile}
                    alt="profile"
                    width={57}
                    height={57}
                    className="rounded-full"
                  />
                ) : (
                  <GradientProfileMD />
                )}
              </div>
              <div className="h-full ml-6 flex flex-col justify-center gap-3">
                <div
                  className={`${
                    applicant.selected ? 'text-white' : 'text-black'
                  } text-3xl font-bold`}
                >
                  {applicant.user.nickname} [{applicant.user.major}] 지원서
                </div>
                <div
                  className={`${
                    applicant.selected ? 'text-white' : 'text-black'
                  } text-sm font-normal`}
                >
                  {applicant.user.major} | {applicant.user.grade}학년 |{' '}
                  {new Date(applicant.appliedAt).toISOString().split('T')[0]}
                </div>
              </div>
              <div
                className={`absolute right-8 flex items-end pb-5 gap-3 ${
                  applicant.selected ? 'text-white' : 'text-black'
                } text-sm h-full`}
              >
                <Icons
                  name={
                    applicant.selected
                      ? applicantShareWhite
                      : applicantShareBlack
                  }
                />
                공유하기
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ApplicantList;
