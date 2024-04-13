'use client';

import Header from 'components/layout/Header';
import EditUserInfoContainer from 'components/mypage/container/EditUserInfoContaner';
import ProfilesImgContainer from 'components/mypage/container/ProfilesImgContainer';
import IsSuccessEditProfile from 'components/mypage/edit/IsSuccessEditProfile';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { mypageMyInfoState } from 'recoil/mypage';

interface EditPageProps {
  params: { slug: string };
}

export default function EditPage({ params }: EditPageProps) {
  const [data, setData] = useState<ResponseMypageBasicInfo>();
  const [mypageInfo, setMypageInfoState] = useRecoilState(mypageMyInfoState);

  useEffect(() => {
    const userInfoUrl = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myportfolio?userId=${params.slug}&size=6&page=${1}`;
    const fetchData = async () => {
      const userInfoResponse = await fetch(userInfoUrl, { cache: 'no-store' });
      const userInfoData = await userInfoResponse.json();
      setData(userInfoData);
    };
    fetchData();
  }, [params.slug]);

  useEffect(() => {
    if (data) {
      const { userInfo } = data;
      const {
        profile,
        nickname,
        major,
        userGrade,
        doubleMajor,
        interestField,
        email,
        links,
        selfIntro,
      } = userInfo;
      setMypageInfoState({
        profileImage: profile,
        request: {
          nickname: nickname,
          major: major,
          userGrade: userGrade,
          doubleMajor: doubleMajor,
          interestField: interestField,
          email: email,
          links: links,
          selfIntro,
        },
      });
    }
  }, [data]);

  if (data) {
    return (
      <section className="w-full flex items-center flex-col">
        <div className="w-[80%] max-w-[1290px]">
          <Header nickname={data.userNickname} userId={data.userIdFromHeader} />
        </div>
        <IsSuccessEditProfile />
        <div className="w-[80%] h-full max-w-[1290px] flex-col flex items-center">
          <ProfilesImgContainer profile={mypageInfo.profileImage} />
          <EditUserInfoContainer userId={data.userIdFromHeader} />
        </div>
      </section>
    );
  }
}
