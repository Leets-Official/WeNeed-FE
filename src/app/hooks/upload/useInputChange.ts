'use client';

import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import {
  postApplicantAppealState,
  postApplicantReqState,
  postRecruiterState,
} from 'recoil/crew';

const useInputChange = (type: 'recruiter' | 'applicant') => {
  const [recruiterData, setRecruiterData] = useRecoilState(postRecruiterState);
  const [appealFileData, setAppealFileData] = useRecoilState(
    postApplicantAppealState,
  );
  const [applicantData, setApplicantData] = useRecoilState(
    postApplicantReqState,
  );

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    if (type === 'recruiter') {
      setRecruiterData((prev: RecruitForm) => ({
        ...prev,
        [name]: String(value),
      }));
    } else {
      setApplicantData((prev: ApplicationForm) => ({
        ...prev,
        [name]: String(value),
      }));
    }
  };

  const onChangeInputArray = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const { value, name } = e.target;
    if (type === 'recruiter') {
      const newArray = [...recruiterData[name]];
      newArray[i] = value;
      setRecruiterData((prev: RecruitForm) => ({ ...prev, [name]: newArray }));
    } else {
      const newArray = [...applicantData[name]];
      newArray[i] = value;
      setApplicantData((prev: ApplicationForm) => ({
        ...prev,
        [name]: newArray,
      }));
    }
  };

  const onChangeInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) setAppealFileData(files[0]);
  };

  const onSelectKeyword = (name: string, keyword: string) => {
    if (type === 'recruiter') {
      const currentKeywords = recruiterData[name];
      if (!currentKeywords.includes(keyword)) {
        const newArray = [...currentKeywords, keyword];
        setRecruiterData((prev: RecruitForm) => ({
          ...prev,
          [name]: newArray,
        }));
      }
    } else {
      const currentKeywords = applicantData[name];
      if (!currentKeywords.includes(keyword)) {
        const newArray = [...currentKeywords, keyword];
        setApplicantData((prev: ApplicationForm) => ({
          ...prev,
          [name]: newArray,
        }));
      }
    }
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (type === 'recruiter') {
      const newDeadline = [...recruiterData.deadline];
      switch (name) {
        case '년':
          newDeadline[0] = value;
          break;
        case '월':
          newDeadline[1] = value;
          break;
        case '일':
          newDeadline[2] = value;
          break;
        default:
          break;
      }
      setRecruiterData((prev) => ({ ...prev, deadline: newDeadline }));
    }
  };

  return {
    recruiterData,
    applicantData,
    appealFileData,
    onChangeInputFile,
    onSelectKeyword,
    onChangeInputArray,
    onChangeInput,
    onChangeDate,
  };
};

export default useInputChange;
