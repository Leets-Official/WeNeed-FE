'use client';

import { APPLICANTIONS } from 'constants/apprecruit';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  acceptAndrefuseState,
  acceptedListSelectedState,
  acceptedListState,
  pendingListSelectedState,
  pendingListState,
  refusedListSelectedState,
  refusedListState,
} from 'recoil/apprecruit';

export const useOnClickHandlers = () => {
  const [selectedAllPending, setSelectedAllPending] = useRecoilState(
    pendingListSelectedState,
  );
  const [selectedAllRefused, setSelectedAllRefused] = useRecoilState(
    refusedListSelectedState,
  );
  const [selectedAllAccepted, setSelectedAllAccepted] = useRecoilState(
    acceptedListSelectedState,
  );
  const setAcceptAndRefuseState = useSetRecoilState(acceptAndrefuseState);

  const pendingList = useRecoilValue(pendingListState);
  const refusedList = useRecoilValue(refusedListState);
  const acceptedList = useRecoilValue(acceptedListState);

  const handleSelectedAll = (
    type: string,
    applicants: ExtendedApplicant[][],
  ) => {
    switch (type) {
      case APPLICANTIONS.PENDING:
        setSelectedAllPending(
          (prevSelectedAllPending) => !prevSelectedAllPending,
        );
        pendingList.map((applicantRow) =>
          applicantRow.map((applicant) => ({
            ...applicant,
            selected: !applicant.selected,
          })),
        );
        break;
      case APPLICANTIONS.ACCEPTED:
        setSelectedAllAccepted(
          (prevSelectedAllAccepted) => !prevSelectedAllAccepted,
        );
        refusedList.map((applicantRow) =>
          applicantRow.map((applicant) => ({
            ...applicant,
            selected: !applicant.selected,
          })),
        );
        break;
      case APPLICANTIONS.REJECTED:
        setSelectedAllRefused(
          (prevSelectedAllRefused) => !prevSelectedAllRefused,
        );
        acceptedList.map((applicantRow) =>
          applicantRow.map((applicant) => ({
            ...applicant,
            selected: !applicant.selected,
          })),
        );
        break;
    }
  };

  const handleSelect = (
    rowIndex: number,
    id: number,
    applicants: ExtendedApplicant[][],
  ) => {
    const updatedApplicants = applicants.map((applicantRow, i) =>
      i === rowIndex
        ? applicantRow.map((applicant) =>
            applicant.applicationId === id
              ? { ...applicant, selected: !applicant.selected }
              : applicant,
          )
        : applicantRow,
    );

    const selectApplicant: ExtendedApplicant[][] = updatedApplicants.map(
      (applicantRow) => applicantRow.filter((applicant) => applicant.selected),
    );

    console.log('updatedApplicants: ', updatedApplicants);
    console.log('selectApplicant: ', selectApplicant);
    return { updatedApplicants, selectApplicant };
  };

  const handleAccept = async (applicants: ExtendedApplicant[][]) => {
    const fetchRequests = applicants.flatMap((applicantRow) =>
      applicantRow
        .filter(
          (applicant) => applicant.selected && applicant.result === 'PENDING',
        )
        .map((applicant) =>
          fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/applicationforms/applications/update?applicationId=${applicant.applicationId}&result=ACCEPTED`,
            { method: 'PATCH' },
          ),
        ),
    );

    try {
      const responses = await Promise.all(fetchRequests);
      const isSuccess = responses.every((response) => response.ok);

      if (isSuccess) {
        setAcceptAndRefuseState((prev) => !prev);
      } else {
        console.error('There was an error in one or more requests');
      }
    } catch (error) {
      console.error('There was an error in one or more requests:', error);
    }
  };

  const handleReject = async (applicants: ExtendedApplicant[][]) => {
    console.log('applicants reject: ', applicants);
    const fetchRequests = applicants.flatMap((applicantRow) =>
      applicantRow
        .filter(
          (applicant) => applicant.selected && applicant.result === 'PENDING',
        )
        .map((applicant) =>
          fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/applicationforms/applications/update?applicationId=${applicant.applicationId}&result=REFUSED`,
            { method: 'PATCH' },
          ),
        ),
    );

    try {
      const responses = await Promise.all(fetchRequests);
      const isSuccess = responses.every((response) => response.ok);
      console.log('responses: ', responses);
      if (isSuccess) {
        setAcceptAndRefuseState((prev) => !prev);
      } else {
        console.error('There was an error in one or more requests');
      }
    } catch (error) {
      console.error('There was an error in one or more requests:', error);
    }
  };

  return { handleSelectedAll, handleSelect, handleAccept, handleReject };
};

export default useOnClickHandlers;
