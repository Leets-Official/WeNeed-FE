'use client';

'use client';

import Profile from 'components/details/common/Profile';
import DetailCategories from 'components/main/common/DetailCategories';
import RecruitmentInfo from 'components/crew/RecruitmentInfo';
import Header from 'components/layout/Header';
import CrewSubmission from 'components/upload/crew/recruiter/CrewSubmission';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface AppRecruitmentProps {
  articleId: string;
}

const AppRecruitment = ({ articleId }: AppRecruitmentProps) => {
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
      <section className="min-h-screen flex flex-col items-center w-full mt-[5%]">
        <div
          className={`relativ rounded-[10px] py-[54px] px-[47px] mb-[100px] bg-black w-full text-white ${
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
          <RecruitmentInfo recruitForm={recruitForm} isApp={true} />
        </div>
      </section>
    );
  }
};

export default AppRecruitment;
