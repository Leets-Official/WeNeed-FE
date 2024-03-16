'use client';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  pendingListState,
  refusedListState,
  acceptedListState,
  responseApplicantsListState,
} from 'recoil/apprecruit';

const useUpdateApplicantList = () => {
  const setPendingList =
    useSetRecoilState<ExtendedApplicant[][]>(pendingListState);
  const setRefusedList =
    useSetRecoilState<ExtendedApplicant[][]>(refusedListState);
  const setAcceptedList =
    useSetRecoilState<ExtendedApplicant[][]>(acceptedListState);
  const applicantsData = useRecoilValue(responseApplicantsListState);

  const updateApplicantList = () => {
    console.log('updateApplicantList: ', applicantsData);
    const extendedApplicants: ExtendedApplicant[][] = applicantsData.map(
      (applicantRow: Applicant[]) =>
        applicantRow.map((applicant) => ({
          ...applicant,
          selected: false,
        })),
    );

    const pendingApplicants: ExtendedApplicant[][] = [];
    const refusedApplicants: ExtendedApplicant[][] = [];
    const acceptedApplicants: ExtendedApplicant[][] = [];

    extendedApplicants.forEach((applicantRow) => {
      applicantRow.forEach((applicant) => {
        if (applicant.result === 'PENDING') {
          pendingApplicants.push(applicantRow);
        } else if (applicant.result === 'REFUSED') {
          refusedApplicants.push(applicantRow);
        } else if (applicant.result === 'ACCEPTED') {
          acceptedApplicants.push(applicantRow);
        }
      });
    });

    setPendingList(pendingApplicants);
    setRefusedList(refusedApplicants);
    setAcceptedList(acceptedApplicants);
  };

  return updateApplicantList;
};

export default useUpdateApplicantList;
