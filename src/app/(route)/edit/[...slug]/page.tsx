'use client';

import Header from 'components/layout/Header';
import EditUserInfoContainer from 'components/mypage/container/EditUserInfoContaner';
import ProfilesImgContainer from 'components/mypage/container/ProfilesImgContainer';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { mypageMyInfoState } from 'recoil/mypage';

interface EditPageProps {
  params: { slug: string };
}

export default function EditPage({ params }: EditPageProps) {
  const userId = parseInt(params.slug);
  const [data, setData] = useState<ResponseMypageBasicInfo>();
  const [mypageInfo, setMypageInfoState] = useRecoilState(mypageMyInfoState);

  useEffect(() => {
    const userInfoUrl = `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myportfolio?userId=${params.slug}&size=6&page=${1}`;
    const fetchData = async () => {
      const userInfoResponse = await fetch(userInfoUrl, { cache: 'no-store' });
      const userInfoData = await userInfoResponse.json();
      console.log('userInfoData', userInfoData);
      setData(userInfoData);
    };
    fetchData();
  }, [params.slug]);

  useEffect(() => {
    if (data) {
      console.log('data', data);
      const { userInfo, userIdFromHeader } = data;
      const {
        profile,
        nickname,
        major,
        userGrade,
        doubleMajor,
        interestField,
        email,
        lnks,
        selfIntro,
      } = userInfo;
      console.log('userInfo', userInfo);
      console.log('userIdFromHeader', userIdFromHeader);
      setMypageInfoState({
        profileImage: profile,
        request: {
          nickname,
          major,
          userGrade,
          doubleMajor,
          interestField: interestField,
          email,
          links: lnks,
        },
        selfIntro,
      });
    }
  }, [data]);

  if (data) {
    return (
      <section className="w-full flex items-center flex-col">
        <div className="w-[80%] max-w-[1290px]">
          <Header
            nickname={mypageInfo.request.nickname}
            userId={data.userIdFromHeader}
          />
        </div>
        <div className="w-[80%] h-full max-w-[1290px] flex-col flex items-center">
          <ProfilesImgContainer profile={undefined} />
          <EditUserInfoContainer />
        </div>
      </section>
    );
  }
}
