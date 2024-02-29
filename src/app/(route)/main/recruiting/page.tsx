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
  const [data, setData] = useState<ResponseRecruitingMain | null | undefined>(
    null,
  );
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_NEXT_SERVER
        }/api/main/recruiting?size=${MAIN_SIZE}&page=${page}&detailTags=${
          selectedCategoriesValue || ''
        }`,
      );
      const responseData = await response.json();
      setData((prevData: ResponseRecruitingMain | null | undefined) => ({
        ...prevData!,
        pageable: responseData.pageable,
        user: responseData.user,
        recruitList: prevData
          ? [...prevData.recruitList, ...responseData.recruitList]
          : responseData.recruitList,
      }));
    };

    fetchData();
  }, [selectedCategoriesValue, page]);

  const onIntersect: IntersectionObserverCallback = async ([
    { isIntersecting },
  ]) => {
    if (isIntersecting && page != data?.pageable.totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (data) {
    const { user, recruitList } = data;
    return (
      <section className="flex flex-col items-center w-full min-h-screen text-white ">
        <Header nickname={user.nickname} userId={user.userId} />
        <MainNavbar />
        <h1 className="w-full mt-[65px] mb-[48px] text-3xl font-semibold">
          {LOGGEDIN_SECTION_HEADINGS.crew}
        </h1>
        <DetailCategoriesContainer />
        <RecruitingContainer
          onIntersect={onIntersect}
          data={data.recruitList}
          user={data.user}
        />
      </section>
    );
  }
}
