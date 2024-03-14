'use client';

import Profile from 'components/details/common/Profile';
import { useEffect, useState } from 'react';
import ApplicationInfo from './ApplicationInfo';
import DetailCategories from 'components/main/common/DetailCategories';
import Header from 'components/layout/Header';

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
      <>
        <div className="absolute top-0 w-full max-w-[1280px]">
          <Header nickname={user.nickname || ''} userId={user.userId || -1} />
        </div>
        <div className="w-[80%] h-auto bg-white rounded-lg px-[39px] py-[43px]">
          <Profile writer={user} size="large" date="" gradient={true} />
          <div className="w-full flex mt-[40px] text-white">
            {applicationForm.detailTags.map((category) => (
              <DetailCategories key={category} category={category} />
            ))}
          </div>
          <ApplicationInfo applicationForm={applicationForm} />
        </div>
      </>
    );
  }
};

export default ApplicationContainer;
