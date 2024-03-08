'use client';

import { InfoBoxContainer } from './InfoBoxContainer';
import { UserInfoContainer } from './UserInfoContainer';

export const ProfileContainer = () => {
  const userInfoItemList = [
    '-',
    '디자인',
    'weneed@gmail.com',
    'loud.kr/m/88100v2r',
    '안녕하세요 시각디자인과 박명수입니다 \n  3D모델링 위주의 작업을 합니다! 😁',
  ];

  return (
    <div
      className={`w-[40%] min-h-[850px] h-screen flex flex-col justify-center items-end bg-neutral-900`}
    >
      <div className="h-full flex flex-col justify-center items-center gap-16 mr-[5%]">
        <UserInfoContainer />
        <InfoBoxContainer userInfoItemList={userInfoItemList} />
      </div>
    </div>
  );
};
