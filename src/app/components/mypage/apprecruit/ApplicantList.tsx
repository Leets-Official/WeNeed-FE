'use client';

import Icons from 'components/common/Icons';
import useOnClickHandlers from 'hooks/apprecruit/useOnclickHandler';
import {
  applicantShareBlack,
  applicantShareWhite,
  checkbox,
} from 'ui/IconsPath';
import GradientCheckBox from 'ui/gradient/GradientCheckBox';
import GradientProfileMD from 'ui/gradient/GradientProfileMD';
import { useRecoilValue } from 'recoil';
import {
  acceptedListState,
  pendingListState,
  refusedListState,
} from 'recoil/apprecruit';
import { APPLICANTIONS } from 'constants/apprecruit';
import Image from 'next/image';
import Link from 'next/link';

interface ApplicantListProps {
  type: string;
}

const ApplicantList = ({ type }: ApplicantListProps) => {
  const acceptedList = useRecoilValue(acceptedListState);
  const pendingList = useRecoilValue(pendingListState);
  const refusedList = useRecoilValue(refusedListState);
  const { handleSelect } = useOnClickHandlers();

  const applicationList =
    type === APPLICANTIONS.PENDING
      ? pendingList
      : type === APPLICANTIONS.ACCEPTED
        ? acceptedList
        : refusedList;

  const copyURL = async (applicantId: number) => {
    const currentUrl = `www.weneed.site/crew/application/${applicantId}`;
    await navigator.clipboard.writeText(currentUrl);
    alert('링크가 복사되었습니다.');
  };

  return (
    <div className="w-full flex gap-8 flex-col items-center scrollbar-hide">
      <div className="w-full scrollbar-hide">
        {applicationList.map((applicant, index) => (
          <div
            key={applicant.applicationItem.applicationId}
            className={`flex relative border-black items-center w-full justify-between h-[140px] border ${
              applicant.selected ? ' bg-black' : 'bg-white'
            } rounded-[15px] mb-4`}
          >
            <div
              onClick={() => {
                handleSelect(type, index);
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
            <Link
              className="flex relative items-center w-[80%]"
              href={`/crew/application/${applicant.applicationItem.applicationId}`}
            >
              <div className="flex relative items-center w-full">
                <div className="rounded-full overflow-hidden h-[57px] w-[57px] mx-10">
                  {applicant.applicationItem.user.profile ? (
                    <Image
                      src={applicant.applicationItem.user.profile}
                      alt="profile"
                      width={57}
                      height={57}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '100%',
                        height: '100%',
                      }}
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
                    {applicant.applicationItem.user.nickname} [
                    {applicant.applicationItem.user.major}] 지원서
                  </div>
                  <div
                    className={`${
                      applicant.selected ? 'text-white' : 'text-black'
                    } text-sm font-normal`}
                  >
                    {applicant.applicationItem.user.major} |{' '}
                    {applicant.applicationItem.user.grade}학년 |{' '}
                    {
                      new Date(applicant.applicationItem.appliedAt)
                        .toISOString()
                        .split('T')[0]
                    }
                  </div>
                </div>
              </div>
            </Link>

            <div
              className={`relative w-[10%] right-0 bottom-0 flex items-end pb-5 gap-3 ${
                applicant.selected ? 'text-white' : 'text-black'
              } h-full`}
            >
              <div
                className={`relative flex items-center gap-2 cursor-pointer`}
                onClick={() => copyURL(applicant.applicationItem.applicationId)}
              >
                <Icons
                  name={
                    applicant.selected
                      ? applicantShareWhite
                      : applicantShareBlack
                  }
                />
                <span className="pt-1">공유하기</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantList;
