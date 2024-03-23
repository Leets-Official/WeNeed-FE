'use client';

import Profile from 'components/details/common/Profile';
import DetailCategories from 'components/main/common/DetailCategories';
import RecruitmentInfo from './RecruitmentInfo';
import Header from 'components/layout/Header';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface RecruitmentContainerProps {
  articleId: string;
}

const RecruitmentContainer = ({ articleId }: RecruitmentContainerProps) => {
  const [data, setData] = useState<ResponseCrewRecruiter | null>(null);
  const pathName = usePathname();

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
    const path = pathName.split('/')[1];

    return (
      <div className="flex flex-col items-center w-[80%] max-w-[1280px]">
        <div className="absolute top-0 max-w-[1280px] w-full">
          <Header nickname={nickname || ''} userId={Number(userId) || -1} />
        </div>
        <div
          className={`w-full h-fit bg-white rounded-lg px-[39px] py-[43px] ${
            path !== 'upload' && 'mb-[30px]'
          } `}
        >
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
        </div>
        <div className="w-full flex justify-end mb-[150px]">
          {sameUser ? (
            <CrewSubmission
              articleId={articleId}
              text="게시물로 돌아가기"
              type="backToArticle"
            />
          ) : (
            path !== 'upload' && (
              <CrewSubmission
                articleId={articleId}
                text="지원서 작성하러 가기"
                type="routerApplicant"
              />
            )
          )}
        </div>
      </div>
    );
  }
};

export default RecruitmentContainer;
