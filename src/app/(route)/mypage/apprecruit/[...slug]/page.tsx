'use client';

import { useEffect, useState } from 'react';
import Header from 'components/layout/Header';
import AppRecruitContainer from 'components/mypage/apprecruit/container/AppRecruitContainer';
import ApplicantListContainer from 'components/mypage/apprecruit/container/ApplicantListContainer';
import MenuBarContainer from 'components/mypage/apprecruit/container/MenuBarContainer';
import GlobalError from '(route)/error';
import Loading from '(route)/loading';
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  appMenuState,
  acceptedListState,
  refusedListState,
  pendingListState,
  isPatchState,
} from 'recoil/apprecruit';

interface MypageAppRecruitPageProps {
  params: { slug: string };
}

export default function MypageAppRecruitPage({
  params,
}: MypageAppRecruitPageProps) {
  const { slug } = params;
  const [articleId, recruitId] = slug;
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>();
  const [selectedMenu, setSelectedMenu] = useRecoilState(appMenuState);
  const router = useRouter();
  const setAcceptedListState = useSetRecoilState(acceptedListState);
  const setPendingListState = useSetRecoilState(pendingListState);
  const setRefusedListState = useSetRecoilState(refusedListState);
  const isPatchData = useRecoilValue(isPatchState);

  useEffect(() => {
    setSelectedMenu('모집글');
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      let url = '';
      if (selectedMenu === '받은 지원서') {
        url = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/applicationforms/applications?articleId=${recruitId}`;
      } else {
        url = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${articleId}`;
      }

      try {
        const response = await fetch(url, { cache: 'no-store' });
        const responseData = await response.json();
        if (selectedMenu === '받은 지원서') {
          const [
            acceptedApplications,
            pendingApplications,
            refusedApplications,
          ] = responseData;

          setAcceptedListState(
            acceptedApplications.map((applicationItem: ApplicationItem) => ({
              selected: false,
              applicationItem,
            })),
          );
          setPendingListState(
            pendingApplications.map((applicationItem: ApplicationItem) => ({
              selected: false,
              applicationItem,
            })),
          );
          setRefusedListState(
            refusedApplications.map((applicationItem: ApplicationItem) => ({
              selected: false,
              applicationItem,
            })),
          );
        } else {
          setData(responseData);
        }
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedMenu, articleId, recruitId, router, isPatchData]);

  const reset = () => {
    setLoading(true);
    setError(null);
    router.back();
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <GlobalError error={error} reset={reset} />;
  }

  if (data) {
    const { nickname, userId } = data.user;
    const { viewCount, heartCount, bookmarkCount } = data.recruit;
    return (
      <section className="w-full flex items-center flex-col">
        <div className="w-[80%] max-w-[1290px]">
          <Header nickname={nickname} userId={userId} />
        </div>
        <div className="w-full bg-white flex justify-center">
          <div className="w-[80%] min-h-screen flex flex-col items-center">
            <MenuBarContainer />
            {selectedMenu === '받은 지원서' ? (
              <ApplicantListContainer />
            ) : (
              <AppRecruitContainer
                count={[viewCount, heartCount, bookmarkCount]}
                data={data}
                params={params}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}
