'use client';

import Profile from 'components/details/common/Profile';
import DetailCategories from 'components/main/common/DetailCategories';
import RecruitmentInfo from './RecruitmentInfo';
import RecruiteSubmission from 'components/upload/crew/recruiter/RecruiteSubmission';
import { useEffect, useState } from 'react';

interface RecruitmentContainerProps {
  articleId: string;
}

const RecruitmentContainer = ({ articleId }: RecruitmentContainerProps) => {
  const [data, setData] = useState<ResponseCrewRecruiter | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/crew/recruiter?articleId=${articleId}`,
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, []);
  if (data) {
    return (
      <div className="w-[80%] h-[1274px] bg-white rounded-lg px-[39px] py-[43px] ">
        <Profile writer={mockWriter} size="large" date="" />
        <div className="w-full flex mt-[40px] text-white">
          {/* {data.detailTag.map((category) => (
            <DetailCategories key={category} category={category} />
          ))} */}
        </div>
        <RecruitmentInfo />
      </div>
    );
  }
};

const mockWriter = {
  userId: 1,
  writerNickname: '위니드',
  major: '경영학전공',
  profile: null,
  grade: 3,
};

export default RecruitmentContainer;
