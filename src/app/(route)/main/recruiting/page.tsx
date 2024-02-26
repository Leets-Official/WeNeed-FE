'use client';

import MainNavbar from 'components/main/common/MainNavbar';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';
import { LOGGEDIN_SECTION_HEADINGS, MAIN_SIZE } from 'constants/main';
import { DetailCategoriesContainer } from 'components/main/containers';
import { useRecoilValue } from 'recoil';
import { selectedCategories } from 'recoil/main';
import { useEffect, useState } from 'react';
import Header from 'components/layout/Header';

export default function MainRecruitingPage() {
  const selectedCategoriesValue = useRecoilValue(selectedCategories);
  const [data, setData] = useState<ResponseRecruitingMain | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_NEXT_SERVER
        }/api/main/recruiting?size=${MAIN_SIZE}&page=${1}&detailTags=${
          selectedCategoriesValue || ''
        }`,
      );
      const responseData = await response.json();
      setData(responseData);
    };

    fetchData();
  }, [selectedCategoriesValue]);

  if (data)
    return (
      <section className="flex flex-col items-center w-full min-h-screen text-white ">
        <Header nickname={data.user.nickname} userId={data.user.userId} />
        <MainNavbar nickname={data.user.nickname} userId={data.user.userId} />
        <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
          {LOGGEDIN_SECTION_HEADINGS.crew}
        </h1>
        <DetailCategoriesContainer />
        <RecruitingContainer data={data.recruitList} user={data.user} />
      </section>
    );
}
