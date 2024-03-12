'use client';

import Header from 'components/layout/Header';
import PostContainer from 'components/mypage/container/PostContainer';
import { ProfileContainer } from 'components/mypage/container/ProfileContainer';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { menuState } from 'recoil/mypage';
import useMypageURL from 'hooks/mypage/useMypageURL';

export default function MyPage({ params }: { params: { slug: string } }) {
  const selectedMenu = useRecoilValue(menuState);
  const [data, setData] = useState<
    ResponseMypageBasicInfo | ResponseMypageOtherInfo | null
  >(null);
  const [userInfoData, setUserInfoData] = useState<MypageUserInfo>();
  const url = useMypageURL({ menu: selectedMenu });
  const userId = parseInt(params.slug);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage${url}?userId=${params.slug}`,
        { cache: 'no-store' },
      );
      const responseData = await response.json();
      console.log(responseData);
      setData((prev) => responseData);
    };

    fetchData();
  }, [selectedMenu, params.slug, url]);

  if (data) {
    const { myOutputList, pageableDto } = data;
    if ('userNickname' in data) {
      const { userNickname, sameUser, userInfo } = data;
      if (!userInfoData) {
        setUserInfoData((prev) => userInfo);
      }
      return (
        <section className="w-full flex items-center flex-col">
          <div className="w-[80%] max-w-[1290px]">
            <Header nickname={userNickname} userId={userId} />
          </div>
          <div className="w-full min-h-screen flex">
            <ProfileContainer
              sameUser={sameUser}
              userInfoItemList={userInfoData}
            />
            <PostContainer sameUser={sameUser} myOutputList={myOutputList} />
          </div>
        </section>
      );
    }
  }
}
