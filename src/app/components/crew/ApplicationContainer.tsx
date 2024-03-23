'use client';

import Profile from 'components/details/common/Profile';
import { useEffect, useState } from 'react';
import ApplicationInfo from './ApplicationInfo';
import DetailCategories from 'components/main/common/DetailCategories';
import Header from 'components/layout/Header';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';

interface ApplicationContainerProps {
  applicationId: string;
}

const ApplicationContainer = ({ applicationId }: ApplicationContainerProps) => {
  const [data, setData] = useState<ResponseCrewApplicant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/crew/applicant?applicationId=${applicationId}`,
      );
      const responseData = await response.json();
      setData((prev) => responseData);
    };

    fetchData();
  }, []);
  if (data) {
    const { applicationForm, user } = data;
    return (
      <div className="flex flex-col items-center w-[80%] max-w-[1280px]">
        <div className="absolute top-0 w-full max-w-[1280px]">
          <Header nickname={data.nickname || ''} userId={data.userId || -1} />
        </div>
        <div className="w-full h-fit bg-white rounded-lg px-[39px] py-[43px] mb-[30px]">
          <Profile writer={user} size="large" date="" gradient={true} />
          <div className="w-full flex mt-[40px] text-white">
            {applicationForm.detailTags.map((category) => (
              <DetailCategories key={category} category={category} />
            ))}
          </div>
          <ApplicationInfo applicationForm={applicationForm} />
        </div>
        <div className="w-full flex justify-end mb-[150px]">
          <CrewSubmission
            articleId={applicationId}
            text="열람 완료"
            type="onCloseApplication"
          />
        </div>
      </div>
    );
  }
};

export default ApplicationContainer;
