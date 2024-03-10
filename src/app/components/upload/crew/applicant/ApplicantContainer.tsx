'use client';

import { useEffect, useState } from 'react';
import MyAnswerContainer from './MyAnswerContainer';
import MyInfoContainer from './MyInfoContainer';

interface ApplicantContainerProps {
  articleId: string;
}

const ApplicantContainer = ({ articleId }: ApplicantContainerProps) => {
  const [data, setData] = useState<ResponseCrewRecruiter | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/crew/recruitment?articleId=${articleId}`,
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, [articleId]);

  if (data) {
    const { recruitForm, user } = data;
    return (
      <div className="flex flex-col justify-center items-center w-full gap-[20px]">
        <MyInfoContainer user={user} />
        <MyAnswerContainer
          user={user}
          crewQuestions={recruitForm.crewQuestions}
        />
      </div>
    );
  }
};

export default ApplicantContainer;
