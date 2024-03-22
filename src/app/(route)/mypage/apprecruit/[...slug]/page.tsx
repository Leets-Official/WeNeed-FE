'use client';

import Header from 'components/layout/Header';
import AppRecruitContainer from 'components/mypage/apprecruit/container/AppRecruitContainer';
import ApplicantListContainer from 'components/mypage/apprecruit/container/ApplicantListContainer';
import MenuBarContainer from 'components/mypage/apprecruit/container/MenuBarContainer';
import useUpdateApplicantList from 'hooks/apprecruit/useUpdataApplicantList';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  acceptAndrefuseState,
  appMenuState,
  responseApplicantsListState,
} from 'recoil/apprecruit';

interface MypageAppRecruitPageProps {
  params: { slug: string };
}

export default function MypageAppRecruitPage({
  params,
}: MypageAppRecruitPageProps) {
  const [data, setData] = useState<ResponseRecruitingDetail | null>(null);
  const selectedMenu = useRecoilValue(appMenuState);
  const [responseApplicantsList, setResponseApplicantsList] = useRecoilState(
    responseApplicantsListState,
  );
  const updateApplicantList = useUpdateApplicantList();
  const acceptAndrefuse = useRecoilValue(acceptAndrefuseState);

  useEffect(() => {
    const fetchData = async () => {
      let url = '';
      if (selectedMenu === '받은 지원서') {
        url = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/applicationforms/applications?articleId=${params.slug}`;
      } else {
        url = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/details/recruiting?articleId=${params.slug}`;
      }

      const response = await fetch(url, { cache: 'no-store' });
      const responseData = await response.json();
      if (selectedMenu === '받은 지원서') {
        setResponseApplicantsList(responseData);
        updateApplicantList();
      } else {
        setData(responseData);
      }
    };

    fetchData();
  }, [selectedMenu, acceptAndrefuse]);

  useEffect(() => {
    updateApplicantList();
  }, [updateApplicantList]);

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

// const mockApplicantsData: Applicant[][] = [
//   [
//     {
//       user: {
//         userId: 0,
//         profile: null,
//         nickname: '하이요',
//         major: '경영학전공',
//         grade: 1,
//       },
//       applicationId: 1,
//       appliedAt: '2024-03-11T08:18:17.522Z',
//       result: 'ACCEPTED',
//     },
//   ],
//   [
//     {
//       user: {
//         userId: 1,
//         profile: null,
//         nickname: 'hello',
//         major: '인공지능전공',
//         grade: 2,
//       },
//       applicationId: 2,
//       appliedAt: '2024-03-12T08:18:17.522Z',
//       result: 'REFUSED',
//     },
//   ],
//   [
//     {
//       user: {
//         userId: 2,
//         profile: null,
//         nickname: '웅냐',
//         major: '컴퓨터공학전공',
//         grade: 3,
//       },
//       applicationId: 3,
//       appliedAt: '2024-03-13T08:18:17.522Z',
//       result: 'PENDING',
//     },
//   ],
//   [
//     {
//       user: {
//         userId: 3,
//         profile: null,
//         nickname: '코딩왕',
//         major: '컴퓨터공학전공',
//         grade: 4,
//       },
//       applicationId: 4,
//       appliedAt: '2024-03-14T08:18:17.522Z',
//       result: 'PENDING',
//     },
//   ],
//   [
//     {
//       user: {
//         userId: 4,
//         profile: null,
//         nickname: '프론트엔드',
//         major: '컴퓨터공학전공',
//         grade: 4,
//       },
//       applicationId: 5,
//       appliedAt: '2024-03-15T08:18:17.522Z',
//       result: 'PENDING',
//     },
//   ],
//   [
//     {
//       user: {
//         userId: 5,
//         profile: null,
//         nickname: '백엔드',
//         major: '컴퓨터공학전공',
//         grade: 4,
//       },
//       applicationId: 6,
//       appliedAt: '2024-03-16T08:18:17.522Z',
//       result: 'ACCEPTED',
//     },
//   ],
// ];
