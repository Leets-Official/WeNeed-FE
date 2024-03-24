'use client';

import Header from 'components/layout/Header';
import PostContainer from 'components/mypage/container/PostContainer';
import { ProfileContainer } from 'components/mypage/container/ProfileContainer';
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { crewTypeState, menuState, userProfileInfoSatate } from 'recoil/mypage';
import useMypageURL from 'hooks/mypage/useMypageURL';

export default function MyPage({ params }: { params: { slug: string } }) {
  const [selectedMenu, setSelectedMenu] = useRecoilState(menuState);
  const [userInfoRecoil, setUserInfoRecoil] = useRecoilState(
    userProfileInfoSatate,
  );
  const [data, setData] = useState<
    | ResponseMypageBasicInfo
    | ResponseMypageOtherInfo
    | ResponseMypageMycrew
    | null
  >(null);
  const [userInfoData, setUserInfoData] = useState<MypageUserInfo>();
  const [page, setPage] = useState<number>(1);

  const crewType = useRecoilValue(crewTypeState);
  let crewSize = 3;
  if (crewType.length > 0) {
    crewSize = 6;
  }
  const url = useMypageURL({
    menu: selectedMenu,
    slug: parseInt(params.slug),
    size: crewSize,
  });
  const userId = parseInt(params.slug);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1);
  };

  useEffect(() => {
    setSelectedMenu('MY OUTPUT');
  }, []);

  useEffect(() => {
    const userInfoUrl = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myportfolio?userId=${params.slug}&size=6&page=${page}`;
    const fetchData = async () => {
      if (selectedMenu === 'MY CREW') {
        const [recruitUrl, appliedUrl] = url;
        const [recruitResponse, appliedResponse, userInfoResponse] =
          await Promise.all([
            fetch(`${recruitUrl}&page=${page}`, { cache: 'no-store' }),
            fetch(`${appliedUrl}&page=${page}`, { cache: 'no-store' }),
            fetch(userInfoUrl, { cache: 'no-store' }),
          ]);
        const [recruitData, appliedData] = await Promise.all([
          recruitResponse.json(),
          appliedResponse.json(),
        ]);
        const userInfoData = await userInfoResponse.json();
        setData({ recruitData, appliedData });
        setUserInfoData((prev) => userInfoData.userInfo);
        setUserInfoRecoil((prev) => ({
          userNickname: userInfoData.userNickname,
          sameUser: userInfoData.sameUser,
          userInfo: userInfoData.userInfo,
          userIdFromHeader: userInfoData.userIdFromHeader,
        }));
      } else {
        const [response, userInfoResponse] = await Promise.all([
          fetch(`${url}&page=${page}`, {
            cache: 'no-store',
          }),
          fetch(userInfoUrl, { cache: 'no-store' }),
        ]);
        const responseData = await response.json();
        const userInfoData = await userInfoResponse.json();
        setData(responseData);
        setUserInfoData((prev) => userInfoData.userInfo);
        setUserInfoRecoil((prev) => ({
          userNickname: userInfoData.userNickname,
          sameUser: userInfoData.sameUser,
          userInfo: userInfoData.userInfo,
          userIdFromHeader: userInfoData.userIdFromHeader,
        }));
      }
    };

    fetchData();
  }, [selectedMenu, crewSize, page]);

  useEffect(() => {
    if (data) {
      console.log('data in mypage : ', data);
      if ('userNickname' in data) {
        const { userNickname, sameUser, userInfo, userIdFromHeader } =
          data as ResponseMypageBasicInfo;
        if (!userInfoData) {
          setUserInfoData((prev) => userInfo);
        }
        console.log(userNickname, sameUser, userInfo, userIdFromHeader);
        setUserInfoRecoil((prev) => ({
          ...prev,
          userNickname,
          sameUser,
          userInfo,
          userIdFromHeader,
        }));
      }
    }
  }, [data]);

  if (data) {
    const mycrewPost = data as ResponseMypageMycrew;
    const { myOutputList, pageableDto } = data as
      | ResponseMypageOtherInfo
      | ResponseMypageOtherInfo;
    console.log('user Id in mypage', userId);
    return (
      <section className="w-full flex items-center flex-col">
        <div className="w-[80%] max-w-[1290px]">
          <Header
            nickname={userInfoRecoil.userNickname}
            userId={userInfoRecoil.userIdFromHeader}
          />
        </div>
        <div className="w-full min-h-screen flex">
          <ProfileContainer
            sameUser={userInfoRecoil.sameUser}
            userInfoItemList={userInfoData}
            userId={userId}
          />
          {'recruitData' in data ? (
            <PostContainer
              sameUser={userInfoRecoil.sameUser}
              myOutputList1={mycrewPost.recruitData.myOutputList}
              myOutputList2={mycrewPost.appliedData.applicationInfoResponses}
              pageableDto1={mycrewPost.recruitData.pageableDto}
              pageableDto2={mycrewPost.appliedData.pageableDto}
              handlePageChange={handlePageChange}
            />
          ) : (
            <PostContainer
              sameUser={userInfoRecoil.sameUser}
              myOutputList1={myOutputList}
              pageableDto1={pageableDto}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </section>
    );
  }
}
