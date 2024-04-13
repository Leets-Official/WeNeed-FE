'use client';

import { APPLICANTIONS } from 'constants/apprecruit';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  selectedAllListState,
  pendingListState,
  acceptedListState,
  refusedListState,
  selectedListItems,
  isPatchState,
} from 'recoil/apprecruit';

export const useOnClickHandlers = () => {
  const setIsPatchData = useSetRecoilState(isPatchState);
  const [pendingList, setPendingListState] = useRecoilState(pendingListState);
  const [acceptedList, setAcceptedListState] =
    useRecoilState(acceptedListState);
  const [refusedList, setRefusedListState] = useRecoilState(refusedListState);
  const [selectedAllList, setSelectedAllListState] =
    useRecoilState(selectedAllListState);
  const [selectedListItem, setSelectedListItem] =
    useRecoilState(selectedListItems);

  const handleSelectedAll = (type: string) => {
    switch (type) {
      case APPLICANTIONS.PENDING:
        setSelectedAllListState((prev) => ({
          ...prev,
          pending: !prev.pending,
        }));

        setPendingListState((prevList) =>
          prevList.map((applicant) => ({
            ...applicant,
            selected: selectedAllList.pending ? false : true,
          })),
        );

        const newPendingList = pendingList.map((applicant) => ({
          ...applicant,
          selected: !selectedAllList.pending,
        }));

        setSelectedListItem((prev) => ({
          ...prev,
          pending: selectedAllList.pending ? [] : newPendingList,
        }));

        break;

      case APPLICANTIONS.ACCEPTED:
        setSelectedAllListState((prev) => ({
          ...prev,
          accepted: !prev.accepted,
        }));

        setAcceptedListState((prevList) =>
          prevList.map((applicant) => ({
            ...applicant,
            selected: selectedAllList.accepted ? false : true,
          })),
        );

        const newAcceptedList = acceptedList.map((applicant) => ({
          ...applicant,
          selected: !selectedAllList.accepted,
        }));

        setSelectedListItem((prev) => ({
          ...prev,
          accepted: selectedAllList.accepted ? [] : newAcceptedList,
        }));

        break;

      case APPLICANTIONS.REJECTED:
        setSelectedAllListState((prev) => ({
          ...prev,
          refused: !prev.refused,
        }));

        setRefusedListState((prevList) =>
          prevList.map((applicant) => ({
            ...applicant,
            selected: selectedAllList.refused ? false : true,
          })),
        );

        const newRefusedList = refusedList.map((applicant) => ({
          ...applicant,
          selected: !selectedAllList.refused,
        }));

        setSelectedListItem((prev) => ({
          ...prev,
          refused: selectedAllList.refused ? [] : newRefusedList,
        }));

        break;
    }
  };

  const handleSelect = (type: string, index: number) => {
    switch (type) {
      case APPLICANTIONS.PENDING:
        const isPendingSelected = pendingList[index].selected;

        setPendingListState((prevList) => {
          const newList = [...prevList];
          newList[index] = {
            ...newList[index],
            selected: !newList[index].selected,
          };
          return newList;
        });

        setSelectedListItem((prev) => {
          if (isPendingSelected) {
            return {
              ...prev,
              pending: prev.pending.filter(
                (applicant) =>
                  applicant.applicationItem.applicationId !==
                  pendingList[index].applicationItem.applicationId,
              ),
            };
          } else {
            return {
              ...prev,
              pending: [
                ...prev.pending,
                {
                  ...pendingList[index],
                  selected: !pendingList[index].selected,
                },
              ],
            };
          }
        });

        break;
      case APPLICANTIONS.ACCEPTED:
        const isAcceptedSelected = acceptedList[index].selected;

        setAcceptedListState((prevList) => {
          const newList = [...prevList];
          newList[index] = {
            ...newList[index],
            selected: !newList[index].selected,
          };
          return newList;
        });

        setSelectedListItem((prev) => {
          if (isAcceptedSelected) {
            return {
              ...prev,
              accepted: prev.accepted.filter(
                (applicant) =>
                  applicant.applicationItem.applicationId !==
                  acceptedList[index].applicationItem.applicationId,
              ),
            };
          } else {
            return {
              ...prev,
              accepted: [
                ...prev.accepted,
                {
                  ...acceptedList[index],
                  selected: !acceptedList[index].selected,
                },
              ],
            };
          }
        });

        break;
      case APPLICANTIONS.REJECTED:
        const isRefusedSelected = refusedList[index].selected;

        setRefusedListState((prevList) => {
          const newList = [...prevList];
          newList[index] = {
            ...newList[index],
            selected: !newList[index].selected,
          };
          return newList;
        });

        setSelectedListItem((prev) => {
          if (isRefusedSelected) {
            return {
              ...prev,
              refused: prev.refused.filter(
                (applicant) =>
                  applicant.applicationItem.applicationId !==
                  refusedList[index].applicationItem.applicationId,
              ),
            };
          } else {
            return {
              ...prev,
              refused: [
                ...prev.refused,
                {
                  ...refusedList[index],
                  selected: !refusedList[index].selected,
                },
              ],
            };
          }
        });

        break;
    }
  };

  const handleAccept = async (type: string) => {
    const selectedList =
      type === APPLICANTIONS.PENDING
        ? selectedListItem.pending
        : type === APPLICANTIONS.ACCEPTED
          ? selectedListItem.accepted
          : selectedListItem.refused;
    const fetchRequests = selectedList.map((applicant) =>
      fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/applicationforms/applications/update?applicationId=${applicant.applicationItem.applicationId}&result=ACCEPTED`,
        { method: 'PATCH' },
      ),
    );

    try {
      const responses = await Promise.all(fetchRequests);
      const isSuccess = responses.every((response) => response.ok);
      if (isSuccess) {
        setIsPatchData((prev) => !prev);
        setSelectedAllListState({
          pending: false,
          accepted: false,
          refused: false,
        });
        setSelectedListItem({
          pending: [],
          accepted: [],
          refused: [],
        });
      }
    } catch (error) {
      console.error('Error in handleAccept : ', error);
    }
  };

  const handleReject = async (type: string) => {
    const selectedList =
      type === APPLICANTIONS.PENDING
        ? selectedListItem.pending
        : type === APPLICANTIONS.ACCEPTED
          ? selectedListItem.accepted
          : selectedListItem.refused;

    const fetchRequests = selectedList.map((applicant) =>
      fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/applicationforms/applications/update?applicationId=${applicant.applicationItem.applicationId}&result=REFUSED`,
        { method: 'PATCH' },
      ),
    );

    try {
      const responses = await Promise.all(fetchRequests);
      const isSuccess = responses.every((response) => response.ok);
      if (isSuccess) {
        setIsPatchData((prev) => !prev);
        setSelectedAllListState({
          pending: false,
          accepted: false,
          refused: false,
        });
        setSelectedListItem({
          pending: [],
          accepted: [],
          refused: [],
        });
      }
    } catch (error) {
      console.error('There was an error in one or more requests:', error);
    }
  };

  return { handleSelectedAll, handleSelect, handleAccept, handleReject };
};

export default useOnClickHandlers;
