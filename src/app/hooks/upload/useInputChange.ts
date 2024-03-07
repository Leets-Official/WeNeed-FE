'use client';

import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { postRecruiterState } from 'recoil/crew';

const useInputChange = () => {
  const [recruiterData, setRecruiterData] = useRecoilState(postRecruiterState);
  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setRecruiterData((prev: RecruitForm) => ({
      ...prev,
      [name]: String(value),
    }));
  };

  const onChangeInputArray = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const { value, name } = e.target;
    const newArray = [...recruiterData[name]];
    newArray[i] = value;
    setRecruiterData((prev: RecruitForm) => ({ ...prev, [name]: newArray }));
  };

  const onSelectKeyword = (name: string, keyword: string) => {
    const currentKeywords = recruiterData[name];
    if (!currentKeywords.includes(keyword)) {
      const newArray = [...currentKeywords, keyword];
      setRecruiterData((prev: RecruitForm) => ({ ...prev, [name]: newArray }));
    }
  };
  const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
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
  };

  return {
    recruiterData,
    onSelectKeyword,
    onChangeInputArray,
    onChangeInput,
    onChangeDate,
  };
};

export default useInputChange;
