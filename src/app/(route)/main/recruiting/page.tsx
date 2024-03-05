'use client';

import MainNavbar from 'components/main/common/MainNavbar';
import RecruitingContainer from 'components/main/containers/RecruitingContainer';
import Header from 'components/layout/Header';
import useLoginModal from 'hooks/upload/useLoginModal';
import ModalPortal from 'components/common/modal/ModalPortal';
import ModalOutside from 'components/common/modal/ModalOutside';
import NeedLoginModal from 'components/common/modal/NeedLoginModal';
import { LOGGEDIN_SECTION_HEADINGS, MAIN_SIZE } from 'constants/main';
import { DetailCategoriesContainer } from 'components/main/containers';
import { useRecoilValue } from 'recoil';
import { selectedCategories } from 'recoil/main';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MainRecruitingPage() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<ResponseRecruitingMain | null | undefined>(
    null,
  );
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const selectedCategoriesValue = useRecoilValue(selectedCategories);
  const loginModalState = useLoginModal(loginModal);
  const router = useRouter();

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

  const onClickItem = (userId: number, articleId: number) => {
    if (userId == -1) {
      setLoginModal(() => true);
    } else {
      router.push(`/recruiting/${articleId}`);
    }
    return undefined;
  };

  const onClose = () => {
    setLoginModal(false);
    document.body.style.overflow = 'auto';
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
          data={recruitList}
          user={user}
          onClickItem={onClickItem}
        />
        {loginModalState && (
          <ModalPortal nodeName="needLoginPortal">
            <ModalOutside
              onClose={onClose}
              className="absolute left-0 w-full h-full flex justify-center items-center"
            >
              <NeedLoginModal />
            </ModalOutside>
          </ModalPortal>
        )}
      </section>
    );
  }
}
