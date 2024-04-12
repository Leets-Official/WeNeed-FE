'use client';

import ApplicantList from '../ApplicantList';
import { APPLICANTIONS } from 'constants/apprecruit';
import { useRecoilValue } from 'recoil';
import {
  pendingListState,
  refusedListState,
  acceptedListState,
} from 'recoil/apprecruit';
import SelectContainer from './SelectContainer';

const ApplicantListContainer = () => {
  const pendingList = useRecoilValue(pendingListState);
  const refusedList = useRecoilValue(refusedListState);
  const acceptedList = useRecoilValue(acceptedListState);

  const statusList = [
    APPLICANTIONS.PENDING,
    APPLICANTIONS.ACCEPTED,
    APPLICANTIONS.REJECTED,
  ];

  const applicants = [pendingList, acceptedList, refusedList];

  return (
    <section className="min-h-screen w-full">
      {statusList.map((status, i) => (
        <div
          key={status}
          className="h-[550px] flex flex-col items-center w-full mt-[5%]"
        >
          <SelectContainer
            applicants={applicants[i]}
            type={status}
            totalCount={applicants[i].flat().length}
            title={status}
          />
          <div className="w-[90%] h-[523px] scrollbar-hide overflow-scroll flex justify-center mb-[20px] mt-[30px]">
            <ApplicantList type={status} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ApplicantListContainer;
