'use client';

import Profile from 'components/details/common/Profile';
import DetailCategories from 'components/main/common/DetailCategories';
import RecruitmentInfo from './RecruitmentInfo';
import { useEffect, useState } from 'react';
import Header from 'components/layout/Header';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';

interface RecruitmentContainerProps {
  articleId: string;
}

const RecruitmentContainer = ({ articleId }: RecruitmentContainerProps) => {
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
    const { recruitUser, article, recruitForm, sameUser } = data;
    const { nickname, userId } = data.loggedInUser;
    const { viewCount, heartCount, bookmarkCount } = article;
    return (
      <>
        <div className="absolute top-0 w-full max-w-[1280px] ">
          <Header nickname={nickname || ''} userId={Number(userId) || -1} />
        </div>
        <div className="w-[80%] h-fit bg-white rounded-lg px-[39px] py-[43px] mb-[150px]">
          <Profile
            writer={recruitUser}
            size="large"
            date=""
            gradient={true}
            count={[viewCount, heartCount, bookmarkCount]}
          />
          <div className="w-full flex mt-[40px] text-white ">
            {recruitForm.detailTags.map((category) => (
              <DetailCategories key={category} category={category} />
            ))}
          </div>
          <RecruitmentInfo recruitForm={recruitForm} />
          {!sameUser && (
            <CrewSubmission
              articleId={articleId}
              text="지원서 작성하러 가기"
              type="routerApplicant"
            />
          )}
        </div>
      </>
    );
  }
};

export default RecruitmentContainer;
