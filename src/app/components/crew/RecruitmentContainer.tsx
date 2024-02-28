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

const mockInfo = {
  //   category: ['대표적인 카테고리를 선택해주세요.', '카테고리'],
  detailTag: ['BIBX', '웹', '앱'],
  deadline: '2024/11/2',
  description: '제가 하고 있는 프로젝트는 3D모델링을 하고 있는데요.',
  task_need: '그래픽 디자이너 ',
  member_count: 1,
  phone: '01022223333',
  crew_questions: '피그마 써 보셨나영?',
  content: '크루를 하고 싶은 분께 하고 싶은 말 ...',
  keywords: ['센스', '친절', '소수인원'],
};

export default RecruitmentContainer;
